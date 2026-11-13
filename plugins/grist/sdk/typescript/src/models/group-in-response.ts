import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { membersInResponseSchema, type MembersInResponse } from "./members-in-response.js";
import { meta1Schema, type Meta1 } from "./meta1.js";
import { schema3Schema, type Schema3 } from "./schema3.js";

export type GroupInResponse = {
  schemas?: Schema3[];
  meta?: Meta1;
  /** The unique identifier of the group. */
  id?: string;
  /** The name of the group. */
  displayName?: string;
  members?: MembersInResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupInResponseSchema: Schema<GroupInResponse> = s.object<GroupInResponse>(
  {
    schemas: s.optional(s.array(s.lazy(() => schema3Schema))),
    meta: s.optional(s.lazy(() => meta1Schema)),
    id: s.optional(s.string()),
    displayName: s.optional(s.string()),
    members: s.optional(s.array(s.lazy(() => membersInResponseSchema))),
  },
  { additionalProperties: s.json() },
);
