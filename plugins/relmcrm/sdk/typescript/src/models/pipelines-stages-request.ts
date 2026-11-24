import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type PipelinesStagesRequest = {
  /** Slugified on write; original kept as label. */
  key: string;
  label?: string;
  ordinal?: number;
  type?: Type1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelinesStagesRequestSchema: Schema<PipelinesStagesRequest> = s.object<PipelinesStagesRequest>(
  {
    key: s.string(),
    label: s.optional(s.string()),
    ordinal: s.optional(s.int()),
    type: s.optional(s.lazy(() => type1Schema)),
  },
  { additionalProperties: s.json() },
);
