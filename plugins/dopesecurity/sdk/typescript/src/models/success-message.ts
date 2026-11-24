import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A simple message response indicating a successful operation */
export type SuccessMessage = {
  /** Simple success message */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const successMessageSchema: Schema<SuccessMessage> = s.object<SuccessMessage>(
  {
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
