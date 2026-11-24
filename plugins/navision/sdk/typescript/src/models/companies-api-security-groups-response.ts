import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { securityGroupSchema, type SecurityGroup } from "./security-group.js";

export type CompaniesApiSecurityGroupsResponse = {
  value?: SecurityGroup[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiSecurityGroupsResponseSchema: Schema<CompaniesApiSecurityGroupsResponse> =
  s.object<CompaniesApiSecurityGroupsResponse>(
    {
      value: s.optional(s.array(s.lazy(() => securityGroupSchema))),
    },
    { additionalProperties: s.json() },
  );
