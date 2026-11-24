import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Chrome DevTools Protocol URL for browser automation */
export type CdpUrl = string;

export const cdpUrlSchema: Schema<CdpUrl> = s.of<CdpUrl>(s.union([s.string()]));
