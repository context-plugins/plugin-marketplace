import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { invalidHandshakeItemSchema, type InvalidHandshakeItem } from "./invalid-handshake-item.js";

/** RFC 7807 problem-detail body returned by Billing Transfer endpoints for 4xx/5xx errors. */
export type BillingTransferProblemDetails = {
  /** A URI identifying the problem type. */
  type: string;
  /** Short, human-readable summary of the problem type. */
  title: string;
  /** The HTTP status code repeated in the body. */
  status: number;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** Stable machine-readable error code. */
  code: string;
  /** Whether retrying the same request may succeed without changes. */
  retryable?: boolean;
  /** Present on batch-validation failures; the batch items that failed validation. */
  invalidItems?: InvalidHandshakeItem[];
};

const billingTransferProblemDetailsProperties: s.Shape<BillingTransferProblemDetails> = {
  type: s.string(),
  title: s.string(),
  status: s.int(),
  detail: s.optional(s.string()),
  code: s.string(),
  retryable: s.optional(s.boolean()),
  invalidItems: s.optional(s.array(s.lazy(() => invalidHandshakeItemSchema))),
};

export const billingTransferProblemDetailsInternalSchema: Schema<BillingTransferProblemDetails> =
  s.object<BillingTransferProblemDetails>(billingTransferProblemDetailsProperties);

export const billingTransferProblemDetailsSchema: Schema<BillingTransferProblemDetails> = s.lazySchema(() =>
  s.object<BillingTransferProblemDetails>({
    ...billingTransferProblemDetailsProperties,
    type: s.string().check(s.url()),
  }),
);
