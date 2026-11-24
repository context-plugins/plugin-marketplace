import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Initial status of the asynchronous job */
export const StatusUiPathDocumentUnderstandingExtractionApi = {
  NotStarted: "NotStarted",
  Running: "Running",
  Failed: "Failed",
  Succeeded: "Succeeded",
} as const;
export type StatusUiPathDocumentUnderstandingExtractionApi =
  | (typeof StatusUiPathDocumentUnderstandingExtractionApi)[keyof typeof StatusUiPathDocumentUnderstandingExtractionApi]
  | (string & {});

export const statusUiPathDocumentUnderstandingExtractionApiSchema: EnumSchema<StatusUiPathDocumentUnderstandingExtractionApi> =
  s.enumOf<StatusUiPathDocumentUnderstandingExtractionApi>(StatusUiPathDocumentUnderstandingExtractionApi);
