import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { downtimeInstrumentSchema, type DowntimeInstrument } from "./downtime-instrument.js";
import {
  entityRazorpayPaymentDowntimesApiSchema,
  type EntityRazorpayPaymentDowntimesApi,
} from "./entity-razorpay-payment-downtimes-api.js";
import {
  methodRazorpayPaymentDowntimesApiSchema,
  type MethodRazorpayPaymentDowntimesApi,
} from "./method-razorpay-payment-downtimes-api.js";
import { severitySchema, type Severity } from "./severity.js";
import {
  statusRazorpayPaymentDowntimesApiSchema,
  type StatusRazorpayPaymentDowntimesApi,
} from "./status-razorpay-payment-downtimes-api.js";

export type PaymentDowntime = {
  id?: string;
  entity?: EntityRazorpayPaymentDowntimesApi;
  method?: MethodRazorpayPaymentDowntimesApi;
  begin?: number;
  end?: number | null;
  status?: StatusRazorpayPaymentDowntimesApi;
  scheduled?: boolean;
  severity?: Severity;
  instrument?: DowntimeInstrument;
  createdAt?: number;
  updatedAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentDowntimeSchema: Schema<PaymentDowntime> = s.object<PaymentDowntime>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entityRazorpayPaymentDowntimesApiSchema)),
    method: s.optional(s.lazy(() => methodRazorpayPaymentDowntimesApiSchema)),
    begin: s.optional(s.int()),
    end: s.optionalNullable(s.int()),
    status: s.optional(s.lazy(() => statusRazorpayPaymentDowntimesApiSchema)),
    scheduled: s.optional(s.boolean()),
    severity: s.optional(s.lazy(() => severitySchema)),
    instrument: s.optional(s.lazy(() => downtimeInstrumentSchema)),
    createdAt: s.optional(s.int()),
    updatedAt: s.optional(s.int()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
