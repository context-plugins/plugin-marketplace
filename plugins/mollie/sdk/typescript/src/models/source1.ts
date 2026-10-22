import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  refundRoutingReversalsSourceTypeResponseSchema,
  type RefundRoutingReversalsSourceTypeResponse,
} from "./refund-routing-reversals-source-type-response.js";

/** Where the funds will be pulled back from. */
export type Source1 = {
  type?: RefundRoutingReversalsSourceTypeResponse;
  /**
   * Required for source type `organization`. The ID of the connected organization the funds should
   * be pulled back from.
   */
  organizationId?: string;
};

export const source1Schema: Schema<Source1> = s.object<Source1>({
  type: s.optional(s.lazy(() => refundRoutingReversalsSourceTypeResponseSchema)),
  organizationId: s.optional(s.string()),
});
