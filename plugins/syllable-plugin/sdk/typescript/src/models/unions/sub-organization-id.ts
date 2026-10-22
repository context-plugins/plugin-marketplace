import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the sub-organization */
export type SubOrganizationId = number;

export const subOrganizationIdSchema: Schema<SubOrganizationId> = s.of<SubOrganizationId>(s.union([s.int()]));
