import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  refundRoutingReversalsSourceTypeSchema,
  type RefundRoutingReversalsSourceType,
} from "./refund-routing-reversals-source-type.js";

/** Where the funds will be pulled back from. */
export type Source = {
  type?: RefundRoutingReversalsSourceType;
  /**
   * Required for source type `organization`. The ID of the connected organization the funds should
   * be pulled back from.
   */
  organizationId?: string;
};

export const sourceSchema: Schema<Source> = s.object<Source>({
  type: s.optional(s.lazy(() => refundRoutingReversalsSourceTypeSchema)),
  organizationId: s.optional(s.string()),
});
