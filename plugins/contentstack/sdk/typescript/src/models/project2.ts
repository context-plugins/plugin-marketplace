import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A Contentstack Launch project for web application deployment. */
export type Project2 = {
  /** Unique identifier of the project. */
  uid?: string;
  /** Display name of the project. */
  name?: string;
  /** Description of the project. */
  description?: string;
  /** The web framework used by the project (e.g., next, gatsby, nuxt). */
  framework?: string;
  /** ISO 8601 timestamp when the project was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the project was last updated. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const project2Schema: Schema<Project2> = s.object<Project2>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    framework: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
