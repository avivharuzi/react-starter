import prod from './environment.prod';
import { Environments } from './environments';

export interface Environment {}

let environment: Environment = {};

const stage: string | undefined = process.env.REACT_APP_STAGE;

switch (stage) {
  case Environments.Prod: {
    environment = prod;
  }
}

export {
  environment,
};
