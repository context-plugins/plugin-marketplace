import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A Brand Kit containing centralized brand identity assets and AI configuration. */
export type BrandKit = {
  /** Unique identifier of the Brand Kit. */
  uid?: string;
  /** Display name of the Brand Kit. */
  name?: string;
  /** Description of the Brand Kit's purpose and scope. */
  description?: string;
  /** UID of the organization that owns the Brand Kit. */
  organizationUid?: string;
  /** ISO 8601 timestamp when the Brand Kit was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the Brand Kit was last updated. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const brandKitSchema: Schema<BrandKit> = s.object<BrandKit>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    organizationUid: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      organizationUid: "organization_uid",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
