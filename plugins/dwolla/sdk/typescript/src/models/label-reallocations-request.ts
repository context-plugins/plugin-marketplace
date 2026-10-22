import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { links38Schema, type Links38 } from "./links38.js";

export type LabelReallocationsRequest = {
  links: Links38;
  amount: Amount;
};

export const labelReallocationsRequestSchema: Schema<LabelReallocationsRequest> =
  s.object<LabelReallocationsRequest>({
    links: links38Schema,
    amount: amountSchema,
    _keysMap: {
      links: "_links",
    },
  });
