import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links20Schema, type Links20 } from "./links20.js";
import { plaidSchema, type Plaid } from "./plaid.js";

export type CreatePlaidOpenBankingExchange = {
  links: Links20;
  plaid: Plaid;
};

export const createPlaidOpenBankingExchangeSchema: Schema<CreatePlaidOpenBankingExchange> =
  s.object<CreatePlaidOpenBankingExchange>({
    links: links20Schema,
    plaid: plaidSchema,
    _keysMap: {
      links: "_links",
    },
  });
