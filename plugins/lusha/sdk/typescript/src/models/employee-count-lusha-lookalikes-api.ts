import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EmployeeCountLushaLookalikesApi = {
  exact?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const employeeCountLushaLookalikesApiSchema: Schema<EmployeeCountLushaLookalikesApi> =
  s.object<EmployeeCountLushaLookalikesApi>(
    {
      exact: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
