import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the extraction job */
export const Status1UiPathDocumentUnderstandingExtractionApi = {
  NotStarted: "NotStarted",
  Running: "Running",
  Failed: "Failed",
  Succeeded: "Succeeded",
} as const;
export type Status1UiPathDocumentUnderstandingExtractionApi =
  | (typeof Status1UiPathDocumentUnderstandingExtractionApi)[keyof typeof Status1UiPathDocumentUnderstandingExtractionApi]
  | (string & {});

export const status1UiPathDocumentUnderstandingExtractionApiSchema: EnumSchema<Status1UiPathDocumentUnderstandingExtractionApi> =
  s.enumOf<Status1UiPathDocumentUnderstandingExtractionApi>(Status1UiPathDocumentUnderstandingExtractionApi);
