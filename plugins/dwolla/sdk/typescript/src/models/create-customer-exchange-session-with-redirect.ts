import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links22Schema, type Links22 } from "./links22.js";

/** Create exchange session with redirect URL (required for mobile sessions with Plaid) */
export type CreateCustomerExchangeSessionWithRedirect = {
  links: Links22;
};

export const createCustomerExchangeSessionWithRedirectSchema: Schema<CreateCustomerExchangeSessionWithRedirect> =
  s.object<CreateCustomerExchangeSessionWithRedirect>({
    links: links22Schema,
    _keysMap: {
      links: "_links",
    },
  });
