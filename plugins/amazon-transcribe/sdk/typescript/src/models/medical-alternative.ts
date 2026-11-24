import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { medicalEntitySchema, type MedicalEntity } from "./medical-entity.js";
import { medicalItemSchema, type MedicalItem } from "./medical-item.js";

export type MedicalAlternative = {
  /** Contains transcribed text. */
  transcript?: string;
  /** Contains words, phrases, or punctuation marks in your transcription output. */
  items?: MedicalItem[];
  /**
   * Contains entities identified as personal health information (PHI) in your transcription output.
   */
  entities?: MedicalEntity[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalAlternativeSchema: Schema<MedicalAlternative> = s.object<MedicalAlternative>(
  {
    transcript: s.optional(s.string()),
    items: s.optional(s.array(s.lazy(() => medicalItemSchema))),
    entities: s.optional(s.array(s.lazy(() => medicalEntitySchema))),
    _keysMap: {
      transcript: "Transcript",
      items: "Items",
      entities: "Entities",
    },
  },
  { additionalProperties: s.json() },
);
