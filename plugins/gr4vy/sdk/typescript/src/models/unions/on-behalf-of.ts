import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The Stripe Connect account to target using the `on_behalf_of` request parameter. */
export type OnBehalfOf = string;

export const onBehalfOfSchema: Schema<OnBehalfOf> = s.of<OnBehalfOf>(s.union([s.string()]));
