import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";
import { statusSchema, type Status } from "./status.js";

/** Import OK status */
export type ImportContentResponse = {
  /** Response Status */
  status?: Status;
  data?: Data3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importContentResponseSchema: Schema<ImportContentResponse> = s.object<ImportContentResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => data3Schema)),
  },
  { additionalProperties: s.json() },
);
