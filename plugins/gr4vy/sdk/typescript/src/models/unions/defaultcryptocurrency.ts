import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The default cryptocurrency to present at checkout. This can be used to ensure the user is
 * presented with the same currency in both your checkout and the Giving Block checkout.
 */
export type Defaultcryptocurrency = string;

export const defaultcryptocurrencySchema: Schema<Defaultcryptocurrency> = s.of<Defaultcryptocurrency>(
  s.union([s.string()]),
);
