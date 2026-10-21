import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Item import or export duties represented as a monetary amount in the smallest currency unit for
 * the given currency, for example `1299` cents to create an authorization for `$12.99`
 */
export type DutyAmount = number;

export const dutyAmountSchema: Schema<DutyAmount> = s.of<DutyAmount>(s.union([s.int()]));
