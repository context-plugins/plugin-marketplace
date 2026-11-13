import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { membersInRequestSchema, type MembersInRequest } from "./members-in-request.js";
import { schema3Schema, type Schema3 } from "./schema3.js";

export type GroupInRequest = {
  schemas?: Schema3[];
  /** The display name of the group. */
  displayName?: string;
  members?: MembersInRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupInRequestSchema: Schema<GroupInRequest> = s.object<GroupInRequest>(
  {
    schemas: s.optional(s.array(s.lazy(() => schema3Schema))),
    displayName: s.optional(s.string()),
    members: s.optional(s.array(s.lazy(() => membersInRequestSchema))),
  },
  { additionalProperties: s.json() },
);
