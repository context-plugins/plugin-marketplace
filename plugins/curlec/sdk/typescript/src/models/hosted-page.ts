import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { labelSchema, type Label } from "./label.js";

/** Customise labels on the payment details section of the hosted page. */
export type HostedPage = {
  /** Map of field names to custom label text. Supports localisation (Hindi, Tamil, etc.). */
  label?: Label;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hostedPageSchema: Schema<HostedPage> = s.object<HostedPage>(
  {
    label: s.optional(s.lazy(() => labelSchema)),
  },
  { additionalProperties: s.json() },
);
