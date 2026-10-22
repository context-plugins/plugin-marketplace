import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name of the sub-organization (DEPRECATED) */
export type SubOrganization = string;

export const subOrganizationSchema: Schema<SubOrganization> = s.of<SubOrganization>(s.union([s.string()]));
