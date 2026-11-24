import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type PipelinesStagesRequest1 = {
  /** New key (slugified). */
  key?: string;
  label?: string;
  type?: Type1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelinesStagesRequest1Schema: Schema<PipelinesStagesRequest1> =
  s.object<PipelinesStagesRequest1>(
    {
      key: s.optional(s.string()),
      label: s.optional(s.string()),
      type: s.optional(s.lazy(() => type1Schema)),
    },
    { additionalProperties: s.json() },
  );
