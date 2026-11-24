import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetBuiltinIntentRequest = {
  /**
   * The unique identifier for a built-in intent. To find the signature for an intent, see Standard
   * Built-in Intents in the Alexa Skills Kit.
   */
  signature: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBuiltinIntentRequestSchema: Schema<GetBuiltinIntentRequest> =
  s.object<GetBuiltinIntentRequest>(
    {
      signature: s.string(),
    },
    { additionalProperties: s.json() },
  );
