import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ClassificationDeliverdDevReportsApi = {
  Public: "public",
  Internal: "internal",
  Confidential: "confidential",
  Restricted: "restricted",
} as const;
export type ClassificationDeliverdDevReportsApi =
  | (typeof ClassificationDeliverdDevReportsApi)[keyof typeof ClassificationDeliverdDevReportsApi]
  | (string & {});

export const classificationDeliverdDevReportsApiSchema: EnumSchema<ClassificationDeliverdDevReportsApi> =
  s.enumOf<ClassificationDeliverdDevReportsApi>(ClassificationDeliverdDevReportsApi);
