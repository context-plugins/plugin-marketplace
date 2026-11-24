import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { organizationSchema, type Organization } from "./organization.js";

export type Organizations = {
  organizations: Organization[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationsSchema: Schema<Organizations> = s.object<Organizations>(
  {
    organizations: s.array(s.lazy(() => organizationSchema)),
  },
  { additionalProperties: s.json() },
);
