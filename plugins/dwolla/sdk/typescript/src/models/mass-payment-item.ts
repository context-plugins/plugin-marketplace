import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { links10Schema, type Links10 } from "./links10.js";
import { metadata1Schema, type Metadata1 } from "./metadata1.js";
import { processingChannel1Schema, type ProcessingChannel1 } from "./processing-channel1.js";

export type MassPaymentItem = {
  links?: Links10;
  id?: string;
  status?: string;
  amount?: Amount;
  metadata?: Metadata1;
  processingChannel?: ProcessingChannel1;
};

export const massPaymentItemSchema: Schema<MassPaymentItem> = s.object<MassPaymentItem>({
  links: s.optional(s.lazy(() => links10Schema)),
  id: s.optional(s.string()),
  status: s.optional(s.string()),
  amount: s.optional(s.lazy(() => amountSchema)),
  metadata: s.optional(s.lazy(() => metadata1Schema)),
  processingChannel: s.optional(s.lazy(() => processingChannel1Schema)),
  _keysMap: {
    links: "_links",
  },
});
