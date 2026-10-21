import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links20Schema, type Links20 } from "./links20.js";

/**
 * Create exchange session for web (MX and Plaid web sessions where redirect-url is not required)
 */
export type CreateCustomerExchangeSessionForWeb = {
  links: Links20;
};

export const createCustomerExchangeSessionForWebSchema: Schema<CreateCustomerExchangeSessionForWeb> =
  s.object<CreateCustomerExchangeSessionForWeb>({
    links: links20Schema,
    _keysMap: {
      links: "_links",
    },
  });
