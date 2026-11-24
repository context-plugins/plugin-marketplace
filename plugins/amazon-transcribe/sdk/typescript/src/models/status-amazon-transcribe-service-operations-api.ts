import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the clinical note generation. Possible Values: IN_PROGRESS FAILED COMPLETED After
 * audio streaming finishes, and you send a MedicalScribeSessionControlEvent event (with
 * END_OF_SESSION as the Type), the status is set to IN_PROGRESS. If the status is COMPLETED, the
 * analytics completed successfully, and you can find the results at the locations specified in
 * ClinicalNoteOutputLocation and TranscriptOutputLocation. If the status is FAILED, FailureReason
 * provides details about the failure.
 */
export const StatusAmazonTranscribeServiceOperationsApi = {
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type StatusAmazonTranscribeServiceOperationsApi =
  | (typeof StatusAmazonTranscribeServiceOperationsApi)[keyof typeof StatusAmazonTranscribeServiceOperationsApi]
  | (string & {});

export const statusAmazonTranscribeServiceOperationsApiSchema: EnumSchema<StatusAmazonTranscribeServiceOperationsApi> =
  s.enumOf<StatusAmazonTranscribeServiceOperationsApi>(StatusAmazonTranscribeServiceOperationsApi);
