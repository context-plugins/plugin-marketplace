import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { meta2Schema, type Meta2 } from "./meta2.js";
import { schema6Schema, type Schema6 } from "./schema6.js";
import {
  schemasMembersInResponseSchema,
  type SchemasMembersInResponse,
} from "./schemas-members-in-response.js";

export type RoleInGetResponse = {
  schemas: Schema6[];
  meta: Meta2;
  /** The unique identifier of the role. */
  id: string;
  /** The name of the role. */
  displayName: string;
  members: SchemasMembersInResponse[];
  /** The ID of the organization that the role applies to */
  orgId: number;
  /** The ID of the workspace that the role applies to */
  workspaceId: number;
  /** The ID of the document that the role applies to */
  docId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const roleInGetResponseSchema: Schema<RoleInGetResponse> = s.object<RoleInGetResponse>(
  {
    schemas: s.array(s.lazy(() => schema6Schema)),
    meta: meta2Schema,
    id: s.string(),
    displayName: s.string(),
    members: s.array(s.lazy(() => schemasMembersInResponseSchema)),
    orgId: s.float64(),
    workspaceId: s.float64(),
    docId: s.string(),
  },
  { additionalProperties: s.json() },
);
