import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Versions = {
  /** The desired minimum version for the challenge. */
  minimum?: string;
  /** The desired maximum version for the challenge. */
  maximum?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const versionsSchema: Schema<Versions> = s.object<Versions>(
  {
    minimum: s.optional(s.string()),
    maximum: s.optional(s.string()),
    _keysMap: {
      minimum: "Minimum",
      maximum: "Maximum",
    },
  },
  { additionalProperties: s.json() },
);
