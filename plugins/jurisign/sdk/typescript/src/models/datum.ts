import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum = {
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string | null;
  status?: string;
  sentAt?: Date | null;
  signedAt?: Date | null;
  errorMessage?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumSchema: Schema<Datum> = s.object<Datum>(
  {
    nom: s.optional(s.string()),
    prenom: s.optional(s.string()),
    email: s.optional(s.string()),
    telephone: s.optionalNullable(s.string()),
    status: s.optional(s.string()),
    sentAt: s.optionalNullable(s.dateTime()),
    signedAt: s.optionalNullable(s.dateTime()),
    errorMessage: s.optionalNullable(s.string()),
    _keysMap: {
      sentAt: "sent_at",
      signedAt: "signed_at",
      errorMessage: "error_message",
    },
  },
  { additionalProperties: s.json() },
);
