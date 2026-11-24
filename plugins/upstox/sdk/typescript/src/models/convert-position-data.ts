import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConvertPositionData = {
  /** Status message for convert position request */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const convertPositionDataSchema: Schema<ConvertPositionData> = s.object<ConvertPositionData>(
  {
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
