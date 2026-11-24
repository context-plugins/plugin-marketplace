import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAmazonTranscribeServiceOperationsApiSchema,
  type StatusAmazonTranscribeServiceOperationsApi,
} from "./status-amazon-transcribe-service-operations-api.js";

export type ClinicalNoteGenerationResult = {
  /** Holds the Amazon S3 URI for the output Clinical Note. */
  clinicalNoteOutputLocation?: string;
  /** Holds the Amazon S3 URI for the output Transcript. */
  transcriptOutputLocation?: string;
  /**
   * The status of the clinical note generation. Possible Values: IN_PROGRESS FAILED COMPLETED After
   * audio streaming finishes, and you send a MedicalScribeSessionControlEvent event (with
   * END_OF_SESSION as the Type), the status is set to IN_PROGRESS. If the status is COMPLETED, the
   * analytics completed successfully, and you can find the results at the locations specified in
   * ClinicalNoteOutputLocation and TranscriptOutputLocation. If the status is FAILED, FailureReason
   * provides details about the failure.
   */
  status?: StatusAmazonTranscribeServiceOperationsApi;
  /** If ClinicalNoteGenerationResult is FAILED, information about why it failed. */
  failureReason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clinicalNoteGenerationResultSchema: Schema<ClinicalNoteGenerationResult> =
  s.object<ClinicalNoteGenerationResult>(
    {
      clinicalNoteOutputLocation: s.optional(s.string()),
      transcriptOutputLocation: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusAmazonTranscribeServiceOperationsApiSchema)),
      failureReason: s.optional(s.string()),
      _keysMap: {
        clinicalNoteOutputLocation: "ClinicalNoteOutputLocation",
        transcriptOutputLocation: "TranscriptOutputLocation",
        status: "Status",
        failureReason: "FailureReason",
      },
    },
    { additionalProperties: s.json() },
  );
