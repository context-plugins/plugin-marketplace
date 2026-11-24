import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type7Schema, type Type7 } from "./type7.js";

export type SegmentTypeInfo = {
  /** The type of a segment (technical cue or shot detection). */
  type?: Type7;
  /** The version of the model used to detect segments. */
  modelVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentTypeInfoSchema: Schema<SegmentTypeInfo> = s.object<SegmentTypeInfo>(
  {
    type: s.optional(s.lazy(() => type7Schema)),
    modelVersion: s.optional(s.string()),
    _keysMap: {
      type: "Type",
      modelVersion: "ModelVersion",
    },
  },
  { additionalProperties: s.json() },
);
