import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EmailResponse = {
  /** Email address for the Todoist object. */
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const emailResponseSchema: Schema<EmailResponse> = s.object<EmailResponse>(
  {
    email: s.string(),
  },
  { additionalProperties: s.json() },
);
