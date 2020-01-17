import dev from './dev';
import prod from './prod';

const environment = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default {
  ...environment
};
