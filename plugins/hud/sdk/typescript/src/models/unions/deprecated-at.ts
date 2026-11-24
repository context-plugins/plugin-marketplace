import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Vendor retirement time. Null = not deprecated. A future value announces the date; once it passes,
 * the gateway rejects requests for the model.
 */
export type DeprecatedAt = Date;

export const deprecatedAtSchema: Schema<DeprecatedAt> = s.of<DeprecatedAt>(s.union([s.dateTime()]));
