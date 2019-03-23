import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import axios from 'axios';

class ComponentList extends Component {
	state = {
		card: {
		  images: { png: 'https://deckofcardsapi.com/static/img/JD.png' },
		  value: '12',
		},
		deck_id: null,
		result: ''
	}

	componentWillMount() {
		axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
		.then(response => this.setState({ deck_id: response.data.deck_id }));
	}

	biggerCard = () => {
		axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`)
		.then(response => {
			const prevCard = this.state.card.value
			response.data.cards.map(card => {
			switch (card.value) {
			case '0': 
			card.value = '10';
			break;
			case 'ACE': 
			card.value = '11';
			break;
			case 'JACK': 
			card.value = '12';
			break;
			case 'QUEEN': 
			card.value = '13';
			break;
			case 'KING': 
			card.value = '14';
			break;
			}
			card.value = parseInt(card.value, 10);
				if (prevCard < card.value) {
					console.log('win (' + card.value + ' > ' + prevCard + ')')
					this.setState({ result: 'You win! (' + card.value + ' > ' + prevCard + ')'});
				} else if (prevCard === card.value) {
					console.log('equal (' + card.value + ' = ' + prevCard + ')')
					this.setState({ result: 'Equal card! (' + card.value + ' = ' + prevCard + ')'});
				} else {
					console.log('lose (' + card.value + ' < ' + prevCard + ')')
					this.setState({ result: 'You lose! (' + card.value + ' < ' + prevCard + ')'});
				}
				this.setState({ card: card })
				console.log(card.value)
			})
		})
		.catch(err => {
			console.log(err);
		})
	}

	smallerCard = () => {
		axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`)
		.then(response => {
			const prevCard = this.state.card.value
			response.data.cards.map(card => {
			switch (card.value) {
			case '0': 
			card.value = '10';
			break;
			case 'ACE': 
			card.value = '11';
			break;
			case 'JACK': 
			card.value = '12';
			break;
			case 'QUEEN': 
			card.value = '13';
			break;
			case 'KING': 
			card.value = '14';
			break;
			}
			card.value = parseInt(card.value, 10);
				if (prevCard > card.value) {
					console.log('win (' + card.value + ' < ' + prevCard + ')')
					this.setState({ result: 'You win! (' + card.value + ' < ' + prevCard + ')'});
				} else if (prevCard === card.value) {
					console.log('equal (' + card.value + ' = ' + prevCard + ')')
					this.setState({ result: 'Equal card! (' + card.value + ' = ' + prevCard + ')'});
				} else {
					console.log('lose (' + card.value + ' > ' + prevCard + ')')
					this.setState({ result: 'You lose! (' + card.value + ' > ' + prevCard + ')'});
				}
				this.setState({ card: card })
				console.log(card.value)
			})
		})
		.catch(err => {
			console.log(err);
		})
	}

	render() {
		console.log(this.state);
		return (
			<ScrollView>
			<Card>
				<Text style={styles.text}>
					{this.state.result}
				</Text>

				<CardSection>
					<Image 
						style={styles.img}
						source={{ uri: this.state.card.images.png }} 
					/>
				</CardSection>

				<CardSection>
					<Button onPress={ () => this.biggerCard() } >
						Bigger Card!
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={ () => this.smallerCard() } >
						Smaller Card!
					</Button>
				</CardSection>
			</Card>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  img: {
    height: 314,
    width: 226
  },
  text: {
  	fontSize: 22,
  	color: '#E2CF00',
  	alignSelf: 'center'
  }
});

export default ComponentList;