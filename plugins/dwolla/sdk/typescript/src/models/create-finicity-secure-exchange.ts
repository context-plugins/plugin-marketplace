import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { finicitySchema, type Finicity } from "./finicity.js";
import { links18Schema, type Links18 } from "./links18.js";

export type CreateFinicitySecureExchange = {
  links: Links18;
  finicity: Finicity;
};

export const createFinicitySecureExchangeSchema: Schema<CreateFinicitySecureExchange> =
  s.object<CreateFinicitySecureExchange>({
    links: links18Schema,
    finicity: finicitySchema,
    _keysMap: {
      links: "_links",
    },
  });
