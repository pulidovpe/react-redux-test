import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Results extends Component {
   render() {
      const { suggestions } = this.props;
      console.log(suggestions);
      return (
         <Page
            suggestions={suggestions}
         />
      );
   }
}

const mapStateToProps = (state) => {
   return {
      suggestions: state.suggestions,
   };
};

/* 
const wrapper = connect(mapStateToProps);
const component = wrapper(Results);
export default component;
//Forma mas clara de lo que hay en el export
*/
export default connect(mapStateToProps)(Results);