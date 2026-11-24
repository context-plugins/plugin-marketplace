import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";

export type Profile = {
  /** The profile ID */
  profileId?: string;
  scope?: Scope;
  /** The profile caption */
  caption?: string;
  description?: string;
  applicationId?: string;
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileSchema: Schema<Profile> = s.object<Profile>(
  {
    profileId: s.optional(s.string()),
    scope: s.optional(s.lazy(() => scopeSchema)),
    caption: s.optional(s.string()),
    description: s.optional(s.string()),
    applicationId: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
