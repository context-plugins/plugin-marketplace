import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SequencesEnrollRequest = {
  contactId: string;
  source?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sequencesEnrollRequestSchema: Schema<SequencesEnrollRequest> = s.object<SequencesEnrollRequest>(
  {
    contactId: s.string(),
    source: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      contactId: "contact_id",
    },
  },
  { additionalProperties: s.json() },
);
