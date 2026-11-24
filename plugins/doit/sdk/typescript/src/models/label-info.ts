import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata for a label. */
export type LabelInfo = {
  /** The unique identifier of the label. */
  id: string;
  /** The name of the label. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelInfoSchema: Schema<LabelInfo> = s.object<LabelInfo>(
  {
    id: s.string(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
