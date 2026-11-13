import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userStatusInternalSchema, userStatusSchema, type UserStatus } from "./user-status.js";

/** A project collaborator, as exposed in sync and REST API responses. */
export type ExposedCollaborator = {
  /** String ID of the collaborator. */
  id: string;
  /** Full name of the collaborator. */
  fullName: string;
  /** Email address of the collaborator. */
  email: string;
  /** Timezone of the collaborator. */
  timezone: string;
  /** Avatar image ID for the collaborator. */
  imageId: string | null;
  /**
   * The collaborator's status, shared across Todoist and Comms. `null` when they have none or it
   * has expired.
   */
  status?: UserStatus | null;
  /** Whether the collaborator has been deleted. @default false */
  isDeleted?: boolean;
  /**
   * Whether the collaborator is an agent, such as `@todoist`, rather than a person. Only present
   * when `true`.
   *
   * @default false
   */
  isAgent?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const exposedCollaboratorProperties: s.Shape<ExposedCollaborator> = {
  id: s.string(),
  fullName: s.string(),
  email: s.string(),
  timezone: s.string(),
  imageId: s.nullable(s.string()),
  status: s.optionalNullable(s.lazy(() => userStatusInternalSchema)),
  isDeleted: s.defaulted(s.boolean(), false),
  isAgent: s.defaulted(s.boolean(), false),
  _keysMap: {
    fullName: "full_name",
    imageId: "image_id",
    isDeleted: "is_deleted",
    isAgent: "is_agent",
  },
};

export const exposedCollaboratorInternalSchema: Schema<ExposedCollaborator> = s.object<ExposedCollaborator>(
  exposedCollaboratorProperties,
  { additionalProperties: s.json() },
);

export const exposedCollaboratorSchema: Schema<ExposedCollaborator> = s.lazySchema(() =>
  s.object<ExposedCollaborator>(
    {
      ...exposedCollaboratorProperties,
      status: s.optionalNullable(s.lazy(() => userStatusSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
