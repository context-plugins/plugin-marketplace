import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";
import { responseTypeSchema, type ResponseType } from "./response-type.js";

/** NLWeb response envelope metadata. */
export type AskMeta = {
  responseType: ResponseType;
  /** @default "0.55" */
  version?: "0.55";
  mode: Mode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const askMetaSchema: Schema<AskMeta> = s.object<AskMeta>(
  {
    responseType: responseTypeSchema,
    version: s.defaulted(s.literal("0.55"), "0.55"),
    mode: modeSchema,
    _keysMap: {
      responseType: "response_type",
    },
  },
  { additionalProperties: s.json() },
);
