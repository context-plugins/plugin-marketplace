import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";
import { statusSchema, type Status } from "./status.js";

/** Import OK status */
export type SyncApiReferenceResponse = {
  /** Response Status */
  status?: Status;
  data?: Data1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncApiReferenceResponseSchema: Schema<SyncApiReferenceResponse> =
  s.object<SyncApiReferenceResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => data1Schema)),
    },
    { additionalProperties: s.json() },
  );
