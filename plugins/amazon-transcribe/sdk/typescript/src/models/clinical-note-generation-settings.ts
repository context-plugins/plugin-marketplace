import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { noteTemplateSchema, type NoteTemplate } from "./note-template.js";

export type ClinicalNoteGenerationSettings = {
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

export const clinicalNoteGenerationSettingsSchema: Schema<ClinicalNoteGenerationSettings> =
  s.object<ClinicalNoteGenerationSettings>(
    {
      noteTemplate: s.optional(s.lazy(() => noteTemplateSchema)),
      _keysMap: {
        noteTemplate: "NoteTemplate",
      },
    },
    { additionalProperties: s.json() },
  );
