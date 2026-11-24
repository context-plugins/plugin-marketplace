import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type ErrorError = {
  /** @default "False" */
  ok?: "False";
  /** Stable machine-readable code. Switch on this, not on the message. */
  error: Error1;
  /** Human-readable detail. Wording may change; the code will not. */
  message: string;
  /** Where this code is explained in full. Present on the meta namespace. */
  docsUrl?: string;
  /** What to do about it. Present on the meta namespace. */
  nextSteps?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorErrorProperties: s.Shape<ErrorError> = {
  ok: s.defaulted(s.literal("False"), "False"),
  error: error1Schema,
  message: s.string(),
  docsUrl: s.optional(s.string()),
  nextSteps: s.optional(s.string()),
  _keysMap: {
    docsUrl: "docs_url",
    nextSteps: "next_steps",
  },
};

export const errorErrorInternalSchema: Schema<ErrorError> = s.object<ErrorError>(errorErrorProperties, {
  additionalProperties: s.json(),
});

export const errorErrorSchema: Schema<ErrorError> = s.lazySchema(() =>
  s.object<ErrorError>(
    {
      ...errorErrorProperties,
      docsUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
