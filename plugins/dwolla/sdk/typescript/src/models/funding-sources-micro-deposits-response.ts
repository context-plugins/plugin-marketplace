import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achDetails1Schema, type AchDetails1 } from "./ach-details1.js";
import { failureSchema, type Failure } from "./failure.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type FundingSourcesMicroDepositsResponse = {
  links?: Record<string, HalLink>;
  created?: Date;
  status?: string;
  failure?: Failure;
  /**
   * ACH details for each micro-deposit. Optional; only returned when ACH details are available for
   * the micro-deposits. `deposit1` or `deposit2` may be omitted if details for that deposit are
   * unavailable.
   */
  achDetails?: AchDetails1;
};

export const fundingSourcesMicroDepositsResponseSchema: Schema<FundingSourcesMicroDepositsResponse> =
  s.object<FundingSourcesMicroDepositsResponse>({
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => halLinkSchema),
      ),
    ),
    created: s.optional(s.dateTime()),
    status: s.optional(s.string()),
    failure: s.optional(s.lazy(() => failureSchema)),
    achDetails: s.optional(s.lazy(() => achDetails1Schema)),
    _keysMap: {
      links: "_links",
    },
  });
