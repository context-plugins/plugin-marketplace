import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A user collaborating on an automation idea or project */
export type Collaborator = {
  /** Unique integer identifier of the collaborating user */
  userId?: number;
  /** Display name of the collaborator */
  name?: string;
  /** Email address of the collaborator */
  email?: string;
  /** Role of this collaborator on the automation */
  role?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const collaboratorProperties: s.Shape<Collaborator> = {
  userId: s.optional(s.int()),
  name: s.optional(s.string()),
  email: s.optional(s.string()),
  role: s.optional(s.string()),
};

export const collaboratorInternalSchema: Schema<Collaborator> = s.object<Collaborator>(
  collaboratorProperties,
  { additionalProperties: s.json() },
);

export const collaboratorSchema: Schema<Collaborator> = s.lazySchema(() =>
  s.object<Collaborator>(
    {
      ...collaboratorProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
