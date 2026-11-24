import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The shareable report for this result (create_report: true), or null when none was made. */
export type Report = {
  /** When the link stops resolving unless revoked or deleted sooner. */
  expiresAt?: Date;
  /** AI detector history entry id. */
  id?: string;
  sharedAt?: Date;
  /** Public report link. */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportSchema: Schema<Report> = s.object<Report>(
  {
    expiresAt: s.optional(s.dateTime()),
    id: s.optional(s.string()),
    sharedAt: s.optional(s.dateTime()),
    url: s.optional(s.string()),
    _keysMap: {
      expiresAt: "expires_at",
      sharedAt: "shared_at",
    },
  },
  { additionalProperties: s.json() },
);
