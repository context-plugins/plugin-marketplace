import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { giftcardSchema, type Giftcard } from "../giftcard.js";
import { voucherSchema, type Voucher } from "../voucher.js";

export type V2ProfilesMethodsIssuersIssuerIdResponse = Giftcard | Voucher;

export const v2ProfilesMethodsIssuersIssuerIdResponseSchema: Schema<V2ProfilesMethodsIssuersIssuerIdResponse> =
  s.of<V2ProfilesMethodsIssuersIssuerIdResponse>(
    s.union([s.lazy(() => giftcardSchema), s.lazy(() => voucherSchema)]),
  );
