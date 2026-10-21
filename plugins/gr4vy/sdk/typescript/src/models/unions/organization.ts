import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The optional name of the company or organisation to add to the address. */
export type Organization = string;

export const organizationSchema: Schema<Organization> = s.of<Organization>(s.union([s.string()]));
