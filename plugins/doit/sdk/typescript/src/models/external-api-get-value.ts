import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Single value entry used by some dimension endpoints. */
export type ExternalApiGetValue = {
  cloud?: string;
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalApiGetValueSchema: Schema<ExternalApiGetValue> = s.object<ExternalApiGetValue>(
  {
    cloud: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
