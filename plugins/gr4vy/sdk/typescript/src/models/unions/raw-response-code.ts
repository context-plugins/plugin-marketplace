import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * This is the response code received from the payment service. This can be set to any value and is
 * not standardized across different payment services.
 */
export type RawResponseCode = string;

export const rawResponseCodeSchema: Schema<RawResponseCode> = s.of<RawResponseCode>(s.union([s.string()]));
