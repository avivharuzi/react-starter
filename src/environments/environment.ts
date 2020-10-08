export interface Environment {}

const defaultEnvironment: Environment = {};

const stage: string | undefined = process.env.REACT_APP_STAGE;

export const environment = stage !== undefined ? import(`environment.${stage}`) : defaultEnvironment;
