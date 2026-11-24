import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { organizationSchema, type Organization } from "./organization.js";

export type IamV1OrganizationsResponse = {
  organizations?: Organization[];
  /** Organizations row count */
  rowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iamV1OrganizationsResponseSchema: Schema<IamV1OrganizationsResponse> =
  s.object<IamV1OrganizationsResponse>(
    {
      organizations: s.optional(s.array(s.lazy(() => organizationSchema))),
      rowCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
