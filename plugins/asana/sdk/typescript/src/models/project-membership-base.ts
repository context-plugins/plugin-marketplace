import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";

export type ProjectMembershipBase = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  user?: UserCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectMembershipBaseSchema: Schema<ProjectMembershipBase> = s.object<ProjectMembershipBase>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    user: s.optional(s.lazy(() => userCompactSchema)),
    _keysMap: {
      resourceType: "resource_type",
    },
  },
  { additionalProperties: s.json() },
);
