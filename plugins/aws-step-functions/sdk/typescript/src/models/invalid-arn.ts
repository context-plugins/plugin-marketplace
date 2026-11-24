import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvalidArn = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invalidArnSchema: Schema<InvalidArn> = s.object<InvalidArn>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
