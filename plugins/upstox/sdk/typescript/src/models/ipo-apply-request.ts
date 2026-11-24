import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { ipoBidRequestSchema, type IpoBidRequest } from "./ipo-bid-request.js";

export type IpoApplyRequest = {
  /** IPO id (slug) to apply for, as returned in `id` by the IPO listing and details APIs */
  id: string;
  /** UPI id used to block the application amount */
  upi: string;
  /**
   * Investor category to apply under. Must be one the issue accepts — see `investors[].category` in
   * the IPO details API
   */
  category: Category;
  /** List of bids for the application (1 to 3 bids) */
  bids: IpoBidRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ipoApplyRequestProperties: s.Shape<IpoApplyRequest> = {
  id: s.string(),
  upi: s.string(),
  category: categorySchema,
  bids: s.array(s.lazy(() => ipoBidRequestSchema)),
};

export const ipoApplyRequestInternalSchema: Schema<IpoApplyRequest> = s.object<IpoApplyRequest>(
  ipoApplyRequestProperties,
  { additionalProperties: s.json() },
);

export const ipoApplyRequestSchema: Schema<IpoApplyRequest> = s.lazySchema(() =>
  s.object<IpoApplyRequest>(
    {
      ...ipoApplyRequestProperties,
      id: s.string().check(s.minLength(1)),
      upi: s.string().check(s.minLength(1)),
      bids: s.array(s.lazy(() => ipoBidRequestSchema)).check(s.minLength(0), s.maxLength(3)),
    },
    { additionalProperties: s.json() },
  ),
);
