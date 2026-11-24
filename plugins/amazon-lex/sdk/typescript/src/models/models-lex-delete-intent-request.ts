import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexDeleteIntentRequest = {
  /** The name of the intent. The name is case sensitive. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexDeleteIntentRequestSchema: Schema<ModelsLexDeleteIntentRequest> =
  s.object<ModelsLexDeleteIntentRequest>(
    {
      name: s.string(),
    },
    { additionalProperties: s.json() },
  );
