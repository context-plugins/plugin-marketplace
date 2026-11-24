import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const KindDeliverdDevGatesApi = {
  ReportVersion: "report_version",
  External: "external",
} as const;
export type KindDeliverdDevGatesApi =
  | (typeof KindDeliverdDevGatesApi)[keyof typeof KindDeliverdDevGatesApi]
  | (string & {});

export const kindDeliverdDevGatesApiSchema: EnumSchema<KindDeliverdDevGatesApi> =
  s.enumOf<KindDeliverdDevGatesApi>(KindDeliverdDevGatesApi);
