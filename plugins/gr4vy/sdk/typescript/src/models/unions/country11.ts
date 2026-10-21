import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The 2-letter ISO code of the country where the transaction is processed. This is also used to
 * filter the payment services that can process the transaction. If this value is provided for
 * redirect requests and it's not `null`, it must match the one specified for `country` in
 * `payment_method`. Otherwise, the value specified for `country` in `payment_method` will be
 * assumed implicitly.
 */
export type Country11 = string;

export const country11Schema: Schema<Country11> = s.of<Country11>(s.union([s.string()]));
