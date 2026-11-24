import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LabelSaplingDetectionApi = {
  _0: 0,
  _1: 1,
} as const;
export type LabelSaplingDetectionApi =
  | (typeof LabelSaplingDetectionApi)[keyof typeof LabelSaplingDetectionApi]
  | (number & {});

export const labelSaplingDetectionApiSchema: EnumSchema<LabelSaplingDetectionApi> =
  s.enumOf<LabelSaplingDetectionApi>(LabelSaplingDetectionApi);
