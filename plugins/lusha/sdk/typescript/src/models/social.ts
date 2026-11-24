import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Social = {
  linkedin?: string;
  crunchbase?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const socialSchema: Schema<Social> = s.object<Social>(
  {
    linkedin: s.optional(s.string()),
    crunchbase: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
