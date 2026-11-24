import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { role1Schema, type Role1 } from "./role1.js";

export type ApiV1ManageMembersRequest = {
  role: Role1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageMembersRequestSchema: Schema<ApiV1ManageMembersRequest> =
  s.object<ApiV1ManageMembersRequest>(
    {
      role: role1Schema,
    },
    { additionalProperties: s.json() },
  );
