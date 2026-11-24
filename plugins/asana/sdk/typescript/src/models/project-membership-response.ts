import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectCompact2Schema, type ProjectCompact2 } from "./project-compact2.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";
import { writeAccessSchema, type WriteAccess } from "./write-access.js";

export type ProjectMembershipResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  user?: UserCompact;
  /** [Opt In](/docs/input-output-options). The project the user is a member of. */
  project?: ProjectCompact2;
  /** Whether the user has full access to the project or has comment-only access. */
  writeAccess?: WriteAccess;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectMembershipResponseSchema: Schema<ProjectMembershipResponse> =
  s.object<ProjectMembershipResponse>(
    {
      gid: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      user: s.optional(s.lazy(() => userCompactSchema)),
      project: s.optional(s.lazy(() => projectCompact2Schema)),
      writeAccess: s.optional(s.lazy(() => writeAccessSchema)),
      _keysMap: {
        resourceType: "resource_type",
        writeAccess: "write_access",
      },
    },
    { additionalProperties: s.json() },
  );
