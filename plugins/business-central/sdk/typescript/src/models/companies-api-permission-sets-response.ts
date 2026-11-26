import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { permissionSetSchema, type PermissionSet } from "./permission-set.js";

export type CompaniesApiPermissionSetsResponse = {
  value?: PermissionSet[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiPermissionSetsResponseSchema: Schema<CompaniesApiPermissionSetsResponse> =
  s.object<CompaniesApiPermissionSetsResponse>(
    {
      value: s.optional(s.array(s.lazy(() => permissionSetSchema))),
    },
    { additionalProperties: s.json() },
  );
