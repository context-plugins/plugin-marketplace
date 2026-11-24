import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An automation project within a Contentstack organization. */
export type Project = {
  /** Unique identifier of the project. */
  uid?: string;
  /** Display name of the project. */
  name?: string;
  /** Description of the project's purpose. */
  description?: string;
  /** UID of the organization that owns the project. */
  organizationUid?: string;
  /** ISO 8601 timestamp when the project was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the project was last updated. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectSchema: Schema<Project> = s.object<Project>(
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
