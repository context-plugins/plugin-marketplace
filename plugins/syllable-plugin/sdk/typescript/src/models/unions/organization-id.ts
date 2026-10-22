import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the organization */
export type OrganizationId = number;

export const organizationIdSchema: Schema<OrganizationId> = s.of<OrganizationId>(s.union([s.int()]));
