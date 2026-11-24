import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Evidence = {
  /** The kind of evidence this reference points to. */
  type: string;
  /** Identifier of the referenced evidence. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evidenceSchema: Schema<Evidence> = s.object<Evidence>(
  {
    type: s.string(),
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
