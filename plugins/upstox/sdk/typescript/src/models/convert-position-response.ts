import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { convertPositionData2Schema, type ConvertPositionData2 } from "./convert-position-data2.js";
import { problemSchema, type Problem } from "./problem.js";
import { statusSchema, type Status } from "./status.js";

export type ConvertPositionResponse = {
  status?: Status;
  /** Response data for convert position request */
  data?: ConvertPositionData2;
  /** Error details for convert position request */
  errors?: Problem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const convertPositionResponseSchema: Schema<ConvertPositionResponse> =
  s.object<ConvertPositionResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => convertPositionData2Schema)),
      errors: s.optional(s.array(s.lazy(() => problemSchema))),
    },
    { additionalProperties: s.json() },
  );
