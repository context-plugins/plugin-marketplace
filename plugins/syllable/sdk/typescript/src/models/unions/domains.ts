import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Comma-delimited list of domains that users at the organization may have in their email addresses
 */
export type Domains = string;

export const domainsSchema: Schema<Domains> = s.of<Domains>(s.union([s.string()]));
