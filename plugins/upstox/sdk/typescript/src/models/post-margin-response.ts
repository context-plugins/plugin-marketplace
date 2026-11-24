import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { marginData2Schema, type MarginData2 } from "./margin-data2.js";
import { statusSchema, type Status } from "./status.js";

export type PostMarginResponse = {
  status?: Status;
  /** Response data for margin */
  data?: MarginData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postMarginResponseSchema: Schema<PostMarginResponse> = s.object<PostMarginResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => marginData2Schema)),
  },
  { additionalProperties: s.json() },
);
