import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * CDN URL. The org will always have a logo, but this value will be null on a response to an update
 * where no logo was provided on the request
 */
export type LogoUrl = string;

export const logoUrlSchema: Schema<LogoUrl> = s.of<LogoUrl>(s.union([s.string()]));
