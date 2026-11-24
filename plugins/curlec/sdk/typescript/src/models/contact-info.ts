import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargebackSchema, type Chargeback } from "./chargeback.js";
import { refundSchema, type Refund } from "./refund.js";
import { supportSchema, type Support } from "./support.js";

export type ContactInfo = {
  chargeback?: Chargeback;
  refund?: Refund;
  support?: Support;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactInfoSchema: Schema<ContactInfo> = s.object<ContactInfo>(
  {
    chargeback: s.optional(s.lazy(() => chargebackSchema)),
    refund: s.optional(s.lazy(() => refundSchema)),
    support: s.optional(s.lazy(() => supportSchema)),
  },
  { additionalProperties: s.json() },
);
