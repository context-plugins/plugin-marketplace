import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Collaborator = {
  /** The user's ID */
  id: string;
  /** The user's full name */
  name: string;
  /** The user's email address */
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const collaboratorSchema: Schema<Collaborator> = s.object<Collaborator>(
  {
    id: s.string(),
    name: s.string(),
    email: s.string(),
  },
  { additionalProperties: s.json() },
);
