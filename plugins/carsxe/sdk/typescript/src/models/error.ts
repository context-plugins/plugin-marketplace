import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  /** @default "False" */
  success?: "False";
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    success: s.defaulted(s.literal("False"), "False"),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
