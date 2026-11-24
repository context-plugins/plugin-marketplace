import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Use to filter for either REACTIVE or PROACTIVE insights. */
export const TypeAmazonDevOpsGuruInsightsApi = {
  Reactive: "REACTIVE",
  Proactive: "PROACTIVE",
} as const;
export type TypeAmazonDevOpsGuruInsightsApi =
  | (typeof TypeAmazonDevOpsGuruInsightsApi)[keyof typeof TypeAmazonDevOpsGuruInsightsApi]
  | (string & {});

export const typeAmazonDevOpsGuruInsightsApiSchema: EnumSchema<TypeAmazonDevOpsGuruInsightsApi> =
  s.enumOf<TypeAmazonDevOpsGuruInsightsApi>(TypeAmazonDevOpsGuruInsightsApi);
