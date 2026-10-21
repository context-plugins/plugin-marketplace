import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";

export type FundingSourcesAchRoutingResponse = {
  links?: Record<string, HalLink>;
  accountNumber?: string;
  routingNumber?: string;
};

export const fundingSourcesAchRoutingResponseSchema: Schema<FundingSourcesAchRoutingResponse> =
  s.object<FundingSourcesAchRoutingResponse>({
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => halLinkSchema),
      ),
    ),
    accountNumber: s.optional(s.string()),
    routingNumber: s.optional(s.string()),
    _keysMap: {
      links: "_links",
    },
  });
