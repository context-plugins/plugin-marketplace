import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OptionalSignerInfos = {
  name?: string;
  contact?: string;
  location?: string;
  reason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optionalSignerInfosSchema: Schema<OptionalSignerInfos> = s.object<OptionalSignerInfos>(
  {
    name: s.optional(s.string()),
    contact: s.optional(s.string()),
    location: s.optional(s.string()),
    reason: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
