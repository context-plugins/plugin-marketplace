import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data2Schema, type Data2 } from "./data2.js";
import { statusSchema, type Status } from "./status.js";

/** Process status */
export type DocsSearchResponse = {
  /** Response Status */
  status?: Status;
  /** Response Data */
  data?: Data2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsSearchResponseSchema: Schema<DocsSearchResponse> = s.object<DocsSearchResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => data2Schema)),
  },
  { additionalProperties: s.json() },
);
