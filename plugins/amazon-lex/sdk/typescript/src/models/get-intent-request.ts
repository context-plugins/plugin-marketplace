import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetIntentRequest = {
  /** The name of the intent. The name is case sensitive. */
  name: string;
  /** The version of the intent. */
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getIntentRequestSchema: Schema<GetIntentRequest> = s.object<GetIntentRequest>(
  {
    name: s.string(),
    version: s.string(),
  },
  { additionalProperties: s.json() },
);
