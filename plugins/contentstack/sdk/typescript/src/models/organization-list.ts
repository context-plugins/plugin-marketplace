import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { organizationSchema, type Organization } from "./organization.js";

/** A list of organizations. */
export type OrganizationList = {
  /** Array of organization objects. */
  organizations?: Organization[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationListSchema: Schema<OrganizationList> = s.object<OrganizationList>(
  {
    organizations: s.optional(s.array(s.lazy(() => organizationSchema))),
  },
  { additionalProperties: s.json() },
);
