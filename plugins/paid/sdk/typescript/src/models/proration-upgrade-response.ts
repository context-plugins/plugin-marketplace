import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { prorationDetailSchema, type ProrationDetail } from "./proration-detail.js";

/** Response after successfully scheduling a plan change */
export type ProrationUpgradeResponse = {
  /** The ID of the order */
  orderId: string;
  /** The ID of the amendment record */
  amendmentId: string;
  /** The new version of the order after the amendment */
  version: number;
  /** The effective date of the plan change */
  effectiveDate: Date;
  /** IDs of order lines that were ended */
  endedLineIds: string[];
  /** IDs of new order lines that were created */
  createdLineIds: string[];
  /** IDs of credit lines that were created */
  creditLineIds: string[];
  /** Detailed proration calculations for each updated attribute */
  prorationDetails: ProrationDetail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const prorationUpgradeResponseSchema: Schema<ProrationUpgradeResponse> =
  s.object<ProrationUpgradeResponse>(
    {
      orderId: s.string(),
      amendmentId: s.string(),
      version: s.int(),
      effectiveDate: s.dateTime(),
      endedLineIds: s.array(s.string()),
      createdLineIds: s.array(s.string()),
      creditLineIds: s.array(s.string()),
      prorationDetails: s.array(s.lazy(() => prorationDetailSchema)),
    },
    { additionalProperties: s.json() },
  );
