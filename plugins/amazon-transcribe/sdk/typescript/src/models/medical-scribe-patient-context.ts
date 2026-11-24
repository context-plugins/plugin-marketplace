import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pronounsSchema, type Pronouns } from "./pronouns.js";

export type MedicalScribePatientContext = {
  /**
   * The patient's preferred pronouns that the user wants to provide as a context for clinical note
   * generation.
   */
  pronouns?: Pronouns;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribePatientContextSchema: Schema<MedicalScribePatientContext> =
  s.object<MedicalScribePatientContext>(
    {
      pronouns: s.optional(s.lazy(() => pronounsSchema)),
      _keysMap: {
        pronouns: "Pronouns",
      },
    },
    { additionalProperties: s.json() },
  );
