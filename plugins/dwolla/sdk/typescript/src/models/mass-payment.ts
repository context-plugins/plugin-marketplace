import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";
import { transferAmountSchema, type TransferAmount } from "./transfer-amount.js";

export type MassPayment = {
  links?: Record<string, HalLink>;
  id?: string;
  status?: string;
  created?: Date;
  metaData?: Record<string, unknown>;
  total?: TransferAmount;
  totalFees?: TransferAmount;
  correlationId?: string;
};

export const massPaymentSchema: Schema<MassPayment> = s.object<MassPayment>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => halLinkSchema),
    ),
  ),
  id: s.optional(s.string()),
  status: s.optional(s.string()),
  created: s.optional(s.dateTime()),
  metaData: s.optional(s.record(s.string(), s.unknown())),
  total: s.optional(s.lazy(() => transferAmountSchema)),
  totalFees: s.optional(s.lazy(() => transferAmountSchema)),
  correlationId: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
