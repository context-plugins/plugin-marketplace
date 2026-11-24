import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Outcome of the digitization operation */
export const StatusUiPathDocumentUnderstandingDigitizationApi = {
  Succeeded: "Succeeded",
  Failed: "Failed",
} as const;
export type StatusUiPathDocumentUnderstandingDigitizationApi =
  | (typeof StatusUiPathDocumentUnderstandingDigitizationApi)[keyof typeof StatusUiPathDocumentUnderstandingDigitizationApi]
  | (string & {});

export const statusUiPathDocumentUnderstandingDigitizationApiSchema: EnumSchema<StatusUiPathDocumentUnderstandingDigitizationApi> =
  s.enumOf<StatusUiPathDocumentUnderstandingDigitizationApi>(
    StatusUiPathDocumentUnderstandingDigitizationApi,
  );
