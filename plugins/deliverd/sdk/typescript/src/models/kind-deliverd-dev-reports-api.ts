import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const KindDeliverdDevReportsApi = {
  Snapshot: "snapshot",
  Upload: "upload",
} as const;
export type KindDeliverdDevReportsApi =
  | (typeof KindDeliverdDevReportsApi)[keyof typeof KindDeliverdDevReportsApi]
  | (string & {});

export const kindDeliverdDevReportsApiSchema: EnumSchema<KindDeliverdDevReportsApi> =
  s.enumOf<KindDeliverdDevReportsApi>(KindDeliverdDevReportsApi);
