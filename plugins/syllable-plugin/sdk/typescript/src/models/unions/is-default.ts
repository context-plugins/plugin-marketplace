import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Whether this config should be marked as the default for its suborg. Omit (null) to preserve the
 * existing value; pass true/false to set or unset it. At most one non-deleted config per suborg may
 * be the default; the API returns a 400 if a second default is requested while another is already
 * set.
 */
export type IsDefault = boolean;

export const isDefaultSchema: Schema<IsDefault> = s.of<IsDefault>(s.union([s.boolean()]));
