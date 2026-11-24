import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** List of domain URLs that have cookies stored for this profile */
export type CookieDomains = string[];

export const cookieDomainsSchema: Schema<CookieDomains> = s.of<CookieDomains>(s.union([s.array(s.string())]));
