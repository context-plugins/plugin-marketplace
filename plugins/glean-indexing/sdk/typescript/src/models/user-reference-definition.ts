import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Describes how a user is referenced in a document. The user can be referenced by email or by a
 * datasource specific id.
 */
export type UserReferenceDefinition = {
  email?: string;
  /** some datasources refer to the user by the datasource user id in the document */
  datasourceUserId?: string;
  name?: string;
};

export const userReferenceDefinitionSchema: Schema<UserReferenceDefinition> =
  s.object<UserReferenceDefinition>({
    email: s.optional(s.string()),
    datasourceUserId: s.optional(s.string()),
    name: s.optional(s.string()),
  });
