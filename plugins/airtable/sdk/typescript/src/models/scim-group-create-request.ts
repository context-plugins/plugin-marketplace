import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { member1Schema, type Member1 } from "./member1.js";

/** Request body for creating or replacing a SCIM group. */
export type ScimGroupCreateRequest = {
  schemas: string[];
  /** The display name of the group. */
  displayName: string;
  /** The initial members of the group. */
  members?: Member1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimGroupCreateRequestSchema: Schema<ScimGroupCreateRequest> = s.object<ScimGroupCreateRequest>(
  {
    schemas: s.array(s.string()),
    displayName: s.string(),
    members: s.optional(s.array(s.lazy(() => member1Schema))),
  },
  { additionalProperties: s.json() },
);
