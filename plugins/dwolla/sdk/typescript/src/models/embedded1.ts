import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fundingSourceSchema, type FundingSource } from "./funding-source.js";

export type Embedded1 = {
  fundingSources?: FundingSource[];
};

export const embedded1Schema: Schema<Embedded1> = s.object<Embedded1>({
  fundingSources: s.optional(s.array(s.lazy(() => fundingSourceSchema))),
  _keysMap: {
    fundingSources: "funding-sources",
  },
});
