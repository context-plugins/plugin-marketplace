import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata for one stored credential. Bearers are stored as hashes and can never be listed. */
export type CredentialSummary = {
  id: string;
  name: string;
  createdAt: Date;
  lastUsedAt: Date | null;
  expiresAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const credentialSummarySchema: Schema<CredentialSummary> = s.object<CredentialSummary>(
  {
    id: s.string(),
    name: s.string(),
    createdAt: s.dateTime(),
    lastUsedAt: s.nullable(s.dateTime()),
    expiresAt: s.nullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
