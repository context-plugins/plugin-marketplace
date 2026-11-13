import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { meta2Schema, type Meta2 } from "./meta2.js";
import { schema6Schema, type Schema6 } from "./schema6.js";
import {
  schemasMembersInResponseSchema,
  type SchemasMembersInResponse,
} from "./schemas-members-in-response.js";

export type RoleInResponse = {
  schemas?: Schema6[];
  meta?: Meta2;
  /** The unique identifier of the role. */
  id?: string;
  /** The name of the role. */
  displayName?: string;
  members?: SchemasMembersInResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const roleInResponseSchema: Schema<RoleInResponse> = s.object<RoleInResponse>(
  {
    schemas: s.optional(s.array(s.lazy(() => schema6Schema))),
    meta: s.optional(s.lazy(() => meta2Schema)),
    id: s.optional(s.string()),
    displayName: s.optional(s.string()),
    members: s.optional(s.array(s.lazy(() => schemasMembersInResponseSchema))),
  },
  { additionalProperties: s.json() },
);
