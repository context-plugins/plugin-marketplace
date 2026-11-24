import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { organizationSchema, type Organization } from "./organization.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";

export type OrganizationList = {
  organizations: Organization[];
  nextCursor: NextCursor;
};

export const organizationListSchema: Schema<OrganizationList> = s.object<OrganizationList>({
  organizations: s.array(s.lazy(() => organizationSchema)),
  nextCursor: nextCursorSchema,
});
