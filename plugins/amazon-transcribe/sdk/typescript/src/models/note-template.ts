import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specify one of the following templates to use for the clinical note summary. The default is
 * HISTORY_AND_PHYSICAL. HISTORY_AND_PHYSICAL: Provides summaries for key sections of the clinical
 * documentation. Examples of sections include Chief Complaint, History of Present Illness, Review
 * of Systems, Past Medical History, Assessment, and Plan. GIRPP: Provides summaries based on the
 * patients progress toward goals. Examples of sections include Goal, Intervention, Response,
 * Progress, and Plan. BIRP: Focuses on the patient's behavioral patterns and responses. Examples of
 * sections include Behavior, Inter
 */
export const NoteTemplate = {
  HistoryAndPhysical: "HISTORY_AND_PHYSICAL",
  Girpp: "GIRPP",
  Birp: "BIRP",
  Sirp: "SIRP",
  Dap: "DAP",
  BehavioralSoap: "BEHAVIORAL_SOAP",
  PhysicalSoap: "PHYSICAL_SOAP",
} as const;
export type NoteTemplate = (typeof NoteTemplate)[keyof typeof NoteTemplate] | (string & {});

export const noteTemplateSchema: EnumSchema<NoteTemplate> = s.enumOf<NoteTemplate>(NoteTemplate);
