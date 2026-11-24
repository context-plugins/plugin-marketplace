import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ObjectRelmCrmBatchApi = {
  Contact: "contact",
  Company: "company",
  Deal: "deal",
  Activity: "activity",
} as const;
export type ObjectRelmCrmBatchApi =
  | (typeof ObjectRelmCrmBatchApi)[keyof typeof ObjectRelmCrmBatchApi]
  | (string & {});

export const objectRelmCrmBatchApiSchema: EnumSchema<ObjectRelmCrmBatchApi> =
  s.enumOf<ObjectRelmCrmBatchApi>(ObjectRelmCrmBatchApi);
