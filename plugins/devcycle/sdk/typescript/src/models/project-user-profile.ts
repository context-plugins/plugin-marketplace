import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectUserProfile = {
  /** Auto-generated unique User Profile ID */
  id: string;
  /** The Project associated with the User Profile */
  project: string;
  /** ID of the User who created the User Profile */
  a0User: string;
  /** DVC User Id for User Profile. Mirrors the SDK `user_id`, which is capped at 200 characters. */
  dvcUserId?: string | null;
  /** The date the Project User Profile was created */
  createdAt: Date;
  /** The date the Project User Profile was last updated */
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const projectUserProfileProperties: s.Shape<ProjectUserProfile> = {
  id: s.string(),
  project: s.string(),
  a0User: s.string(),
  dvcUserId: s.optionalNullable(s.string()),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    id: "_id",
    project: "_project",
    a0User: "a0_user",
  },
};

export const projectUserProfileInternalSchema: Schema<ProjectUserProfile> = s.object<ProjectUserProfile>(
  projectUserProfileProperties,
  { additionalProperties: s.json() },
);

export const projectUserProfileSchema: Schema<ProjectUserProfile> = s.lazySchema(() =>
  s.object<ProjectUserProfile>(
    {
      ...projectUserProfileProperties,
      dvcUserId: s.optionalNullable(s.string().check(s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
