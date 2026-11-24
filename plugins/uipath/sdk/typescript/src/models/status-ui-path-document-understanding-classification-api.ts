import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the classification job */
export const StatusUiPathDocumentUnderstandingClassificationApi = {
  NotStarted: "NotStarted",
  Running: "Running",
  Failed: "Failed",
  Succeeded: "Succeeded",
} as const;
export type StatusUiPathDocumentUnderstandingClassificationApi =
  | (typeof StatusUiPathDocumentUnderstandingClassificationApi)[keyof typeof StatusUiPathDocumentUnderstandingClassificationApi]
  | (string & {});

export const statusUiPathDocumentUnderstandingClassificationApiSchema: EnumSchema<StatusUiPathDocumentUnderstandingClassificationApi> =
  s.enumOf<StatusUiPathDocumentUnderstandingClassificationApi>(
    StatusUiPathDocumentUnderstandingClassificationApi,
  );
