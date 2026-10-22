import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * This is the response description received from the payment service. This can be set to any value
 * and is not standardized across different payment services.
 */
export type RawResponseDescription1 = string;

export const rawResponseDescription1Schema: Schema<RawResponseDescription1> = s.of<RawResponseDescription1>(
  s.union([s.string()]),
);
