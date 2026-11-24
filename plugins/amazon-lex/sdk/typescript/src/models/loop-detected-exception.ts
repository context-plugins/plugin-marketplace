import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LoopDetectedException = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loopDetectedExceptionSchema: Schema<LoopDetectedException> = s.object<LoopDetectedException>(
  {
    message: s.optional(s.string()),
    _keysMap: {
      message: "Message",
    },
  },
  { additionalProperties: s.json() },
);
