import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links19Schema, type Links19 } from "./links19.js";

/**
 * Create an exchange using a token. Supports MX, Plaid, and Flinks secure exchange flows, and
 * Checkout.com for Push to Card (debit card).
 */
export type CreateTokenBasedExchange = {
  links: Links19;
  /**
   * Connection or processor token from the exchange partner (e.g., Plaid, MX, Flinks), or payment
   * ID (pay_xxx) from Checkout.com Flow for Push to Card
   */
  token: string;
};

export const createTokenBasedExchangeSchema: Schema<CreateTokenBasedExchange> =
  s.object<CreateTokenBasedExchange>({
    links: links19Schema,
    token: s.string(),
    _keysMap: {
      links: "_links",
    },
  });
