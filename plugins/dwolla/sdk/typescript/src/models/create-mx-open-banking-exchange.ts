import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links20Schema, type Links20 } from "./links20.js";
import { mxSchema, type Mx } from "./mx.js";

export type CreateMxOpenBankingExchange = {
  links: Links20;
  mx: Mx;
};

export const createMxOpenBankingExchangeSchema: Schema<CreateMxOpenBankingExchange> =
  s.object<CreateMxOpenBankingExchange>({
    links: links20Schema,
    mx: mxSchema,
    _keysMap: {
      links: "_links",
    },
  });
