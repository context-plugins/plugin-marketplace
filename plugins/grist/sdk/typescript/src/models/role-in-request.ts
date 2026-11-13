import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { schema6Schema, type Schema6 } from "./schema6.js";
import { schemasMembersInRequestSchema, type SchemasMembersInRequest } from "./schemas-members-in-request.js";

export type RoleInRequest = {
  schemas?: Schema6[];
  members?: SchemasMembersInRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const roleInRequestSchema: Schema<RoleInRequest> = s.object<RoleInRequest>(
  {
    schemas: s.optional(s.array(s.lazy(() => schema6Schema))),
    members: s.optional(s.array(s.lazy(() => schemasMembersInRequestSchema))),
  },
  { additionalProperties: s.json() },
);
