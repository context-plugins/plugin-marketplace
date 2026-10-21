import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Unused: Name of the organization associated with the agent */
export type OrgName = string;

export const orgNameSchema: Schema<OrgName> = s.of<OrgName>(s.union([s.string()]));
