import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexIntent = {
  /** The name of the intent. */
  intentName: string;
  /** The version of the intent. */
  intentVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexIntentSchema: Schema<ModelsLexIntent> = s.object<ModelsLexIntent>(
  {
    intentName: s.string(),
    intentVersion: s.string(),
  },
  { additionalProperties: s.json() },
);
