import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { referencesSchema, type References } from "./references.js";

/** Remittance information provided with the unmatched credit transfer. */
export type RemittanceInformation = {
  /** Unstructured remittance information, such as a free-text payment description. */
  unstructured?: string;
  /** Structured references provided with the unmatched credit transfer. */
  references?: References;
};

export const remittanceInformationSchema: Schema<RemittanceInformation> = s.object<RemittanceInformation>({
  unstructured: s.optional(s.string()),
  references: s.optional(s.lazy(() => referencesSchema)),
});
