import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data4Schema, type Data4 } from "./data4.js";

export type PoliciesAssignmentsResponse = {
  data: Data4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policiesAssignmentsResponseSchema: Schema<PoliciesAssignmentsResponse> =
  s.object<PoliciesAssignmentsResponse>(
    {
      data: data4Schema,
    },
    { additionalProperties: s.json() },
  );
