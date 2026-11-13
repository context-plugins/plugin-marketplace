import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userSchema, type User } from "./user.js";

export type DocsUsersForViewAsResponse = {
  /** Users the document is shared with */
  users?: User[];
  /** Users found in user attribute tables */
  attributeTableUsers?: User[];
  /** Predefined example users */
  exampleUsers?: User[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsUsersForViewAsResponseSchema: Schema<DocsUsersForViewAsResponse> =
  s.object<DocsUsersForViewAsResponse>(
    {
      users: s.optional(s.array(s.lazy(() => userSchema))),
      attributeTableUsers: s.optional(s.array(s.lazy(() => userSchema))),
      exampleUsers: s.optional(s.array(s.lazy(() => userSchema))),
    },
    { additionalProperties: s.json() },
  );
