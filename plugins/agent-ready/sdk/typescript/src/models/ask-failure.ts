import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { askMetaSchema, type AskMeta } from "./ask-meta.js";
import { error2Schema, type Error2 } from "./error2.js";

/** NLWeb failure envelope. */
export type AskFailure = {
  /** NLWeb response envelope metadata. */
  meta: AskMeta;
  error: Error2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const askFailureSchema: Schema<AskFailure> = s.object<AskFailure>(
  {
    meta: askMetaSchema,
    error: error2Schema,
    _keysMap: {
      meta: "_meta",
    },
  },
  { additionalProperties: s.json() },
);
