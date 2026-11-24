import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the test set. */
export const StatusAmazonLexModelBuildingV2TestsetsApi = {
  Importing: "Importing",
  PendingAnnotation: "PendingAnnotation",
  Deleting: "Deleting",
  ValidationError: "ValidationError",
  Ready: "Ready",
} as const;
export type StatusAmazonLexModelBuildingV2TestsetsApi =
  | (typeof StatusAmazonLexModelBuildingV2TestsetsApi)[keyof typeof StatusAmazonLexModelBuildingV2TestsetsApi]
  | (string & {});

export const statusAmazonLexModelBuildingV2TestsetsApiSchema: EnumSchema<StatusAmazonLexModelBuildingV2TestsetsApi> =
  s.enumOf<StatusAmazonLexModelBuildingV2TestsetsApi>(StatusAmazonLexModelBuildingV2TestsetsApi);
