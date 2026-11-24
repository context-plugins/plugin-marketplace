import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response data for convert position request */
export type ConvertPositionData2 = {
  /** Status message for convert position request */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const convertPositionData2Schema: Schema<ConvertPositionData2> = s.object<ConvertPositionData2>(
  {
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
