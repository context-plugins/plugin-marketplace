import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name23Schema, type Name23 } from "./name23.js";

export type AssociatedTranscriptFilter = {
  /** The name of the field to use for filtering. The allowed names are IntentId and SlotTypeId. */
  name: Name23;
  /** The values to use to filter the transcript. */
  values: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associatedTranscriptFilterSchema: Schema<AssociatedTranscriptFilter> =
  s.object<AssociatedTranscriptFilter>(
    {
      name: name23Schema,
      values: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
