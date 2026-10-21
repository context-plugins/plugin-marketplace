import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The domain on which Paze is being loaded. Required when `source` is `web`. */
export type DomainName = string;

export const domainNameSchema: Schema<DomainName> = s.of<DomainName>(s.union([s.string()]));
