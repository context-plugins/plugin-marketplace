import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  installmentdelaymonthsSchema,
  type Installmentdelaymonths,
} from "./unions/installmentdelaymonths.js";
import { installmentsinterestSchema, type Installmentsinterest } from "./unions/installmentsinterest.js";
import {
  merchantadvicecodesupportedSchema,
  type Merchantadvicecodesupported,
} from "./unions/merchantadvicecodesupported.js";
import { numberofinstallmentsSchema, type Numberofinstallments } from "./unions/numberofinstallments.js";

export type FiservInstallmentOptions = {
  /** Passes the `order.installmentOptions.numberOfInstallments` field to the Fiserv API. */
  numberOfInstallments?: Numberofinstallments;
  /** Passes the `order.installmentOptions.installmentsInterest` field to the Fiserv API. */
  installmentsInterest?: Installmentsinterest;
  /** Passes the `order.installmentOptions.installmentDelayMonths` field to the Fiserv API. */
  installmentDelayMonths?: Installmentdelaymonths;
  /** Passes the `order.installmentOptions.merchantAdviceCodeSupported` field to the Fiserv API. */
  merchantAdviceCodeSupported?: Merchantadvicecodesupported;
};

export const fiservInstallmentOptionsSchema: Schema<FiservInstallmentOptions> =
  s.object<FiservInstallmentOptions>({
    numberOfInstallments: s.optional(s.lazy(() => numberofinstallmentsSchema)),
    installmentsInterest: s.optional(s.lazy(() => installmentsinterestSchema)),
    installmentDelayMonths: s.optional(s.lazy(() => installmentdelaymonthsSchema)),
    merchantAdviceCodeSupported: s.optional(s.lazy(() => merchantadvicecodesupportedSchema)),
  });
