import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { defaultcryptocurrencySchema, type Defaultcryptocurrency } from "./unions/defaultcryptocurrency.js";

export type GivingBlockOptions = {
  /**
   * The default cryptocurrency to present at checkout. This can be used to ensure the user is
   * presented with the same currency in both your checkout and the Giving Block checkout.
   */
  defaultCryptocurrency?: Defaultcryptocurrency;
};

export const givingBlockOptionsSchema: Schema<GivingBlockOptions> = s.object<GivingBlockOptions>({
  defaultCryptocurrency: s.optional(s.lazy(() => defaultcryptocurrencySchema)),
});
