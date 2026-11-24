import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiSecretDto = {
  created?: Date;
  id?: string;
  lastUpdated?: Date;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiSecretDtoSchema: Schema<PublicApiSecretDto> = s.object<PublicApiSecretDto>(
  {
    created: s.optional(s.dateTime()),
    id: s.optional(s.string()),
    lastUpdated: s.optional(s.dateTime()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
