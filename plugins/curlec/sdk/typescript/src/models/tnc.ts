import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tnc = {
  id?: string;
  accepted?: boolean;
  /** Unix timestamp when TnC was accepted. */
  acceptedAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tncSchema: Schema<Tnc> = s.object<Tnc>(
  {
    id: s.optional(s.string()),
    accepted: s.optional(s.boolean()),
    acceptedAt: s.optional(s.int()),
    _keysMap: {
      acceptedAt: "accepted_at",
    },
  },
  { additionalProperties: s.json() },
);
