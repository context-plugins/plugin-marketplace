import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";

export type ChangeCursorExpiredResponseError = {
  /** @default "False" */
  ok?: "False";
  /** @default "cursor_expired" */
  error?: "cursor_expired";
  message: string;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changeCursorExpiredResponseErrorSchema: Schema<ChangeCursorExpiredResponseError> =
  s.object<ChangeCursorExpiredResponseError>(
    {
      ok: s.defaulted(s.literal("False"), "False"),
      error: s.defaulted(s.literal("cursor_expired"), "cursor_expired"),
      message: s.string(),
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  );
