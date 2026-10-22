import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** First line of the beneficiary's address. */
export type Address17 = string;

export const address17Schema: Schema<Address17> = s.of<Address17>(s.union([s.string()]));
