import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { noteTemplateSchema, type NoteTemplate } from "./note-template.js";

export type TranscribestreamingClinicalNoteGenerationSettings = {
  /**
   * The name of the Amazon S3 bucket where you want the output of Amazon Web Services HealthScribe
   * post-stream analytics stored. Don't include the S3:// prefix of the specified bucket.
   * HealthScribe outputs transcript and clinical note files under the prefix:
   * S3://$output-bucket-name/healthscribe-streaming/session-id/post-stream-analytics/clinical-notes
   * The role ResourceAccessRoleArn specified in the MedicalScribeConfigurationEvent must have
   * permission to use the specified location. You can change Amazon S3 permissions using the Amazon
   * Web Services Management Console . See also Permissions Required
   */
  outputBucketName: string;
  /**
   * Specify one of the following templates to use for the clinical note summary. The default is
   * HISTORY_AND_PHYSICAL. HISTORY_AND_PHYSICAL: Provides summaries for key sections of the clinical
   * documentation. Examples of sections include Chief Complaint, History of Present Illness, Review
   * of Systems, Past Medical History, Assessment, and Plan. GIRPP: Provides summaries based on the
   * patients progress toward goals. Examples of sections include Goal, Intervention, Response,
   * Progress, and Plan. BIRP: Focuses on the patient's behavioral patterns and responses. Examples
   * of sections include Behavior, Inter
   */
  noteTemplate?: NoteTemplate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcribestreamingClinicalNoteGenerationSettingsSchema: Schema<TranscribestreamingClinicalNoteGenerationSettings> =
  s.object<TranscribestreamingClinicalNoteGenerationSettings>(
    {
      outputBucketName: s.string(),
      noteTemplate: s.optional(s.lazy(() => noteTemplateSchema)),
      _keysMap: {
        outputBucketName: "OutputBucketName",
        noteTemplate: "NoteTemplate",
      },
    },
    { additionalProperties: s.json() },
  );
