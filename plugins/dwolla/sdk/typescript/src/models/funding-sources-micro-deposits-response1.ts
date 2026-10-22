import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links30Schema, type Links30 } from "./links30.js";

/** Response for microdeposits operations (initiation and verification) */
export type FundingSourcesMicroDepositsResponse1 = {
  links?: Links30;
};

export const fundingSourcesMicroDepositsResponse1Schema: Schema<FundingSourcesMicroDepositsResponse1> =
  s.object<FundingSourcesMicroDepositsResponse1>({
    links: s.optional(s.lazy(() => links30Schema)),
    _keysMap: {
      links: "_links",
    },
  });
