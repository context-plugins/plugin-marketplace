import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IntentAccepted = {
  /** The polling endpoint URI to extract the bulk results */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentAcceptedSchema: Schema<IntentAccepted> = s.object<IntentAccepted>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
