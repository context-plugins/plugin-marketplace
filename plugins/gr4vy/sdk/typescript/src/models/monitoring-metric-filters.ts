import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { method1211Schema, type Method1211 } from "./unions/method1211.js";
import { paymentMethodBin1Schema, type PaymentMethodBin1 } from "./unions/payment-method-bin1.js";
import { paymentMethodScheme1Schema, type PaymentMethodScheme1 } from "./unions/payment-method-scheme1.js";
import { paymentServiceId3Schema, type PaymentServiceId3 } from "./unions/payment-service-id3.js";

export type MonitoringMetricFilters = {
  /**
   * Filters the results to the set of data aggregated over the duration of the specified period.
   * The duration must be between 5 to 60 minutes. This parameter should be in the format of [ISO
   * 8601 interval](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals) while the duration only
   * format is not accepted. Start and end are either a datetime in ISO 8601 format or a placeholder
   * which is one of the following: `now`, `hour_start` and `hour_end`.
   */
  datetimeRange: string;
  /**
   * Filters the results to only include transactions that were processed using the specified
   * payment method. This parameter also accepts `null` to include transactions that have a null for
   * this field.
   */
  method?: Method1211;
  /**
   * Filters the results to only include transactions that used the specified payment method bin.
   * The payment method bin is the first 6 digits of the card number. This parameter also accepts
   * `null` to include transactions that have a null for this field.
   */
  paymentMethodBin?: PaymentMethodBin1;
  /**
   * Filters the results to only include transactions that were processed with the specified payment
   * method scheme. This parameter also accepts `null` to include transactions that have a null for
   * this field.
   */
  paymentMethodScheme?: PaymentMethodScheme1;
  /**
   * Filters the results to only include transactions that were processed with the specified payment
   * service ID. This parameter also accepts `null` to include transactions that have a null for
   * this field.
   */
  paymentServiceId?: PaymentServiceId3;
};

export const monitoringMetricFiltersSchema: Schema<MonitoringMetricFilters> =
  s.object<MonitoringMetricFilters>({
    datetimeRange: s.string(),
    method: s.optional(s.lazy(() => method1211Schema)),
    paymentMethodBin: s.optional(s.lazy(() => paymentMethodBin1Schema)),
    paymentMethodScheme: s.optional(s.lazy(() => paymentMethodScheme1Schema)),
    paymentServiceId: s.optional(s.lazy(() => paymentServiceId3Schema)),
    _keysMap: {
      datetimeRange: "datetime_range",
      paymentMethodBin: "payment_method_bin",
      paymentMethodScheme: "payment_method_scheme",
      paymentServiceId: "payment_service_id",
    },
  });
