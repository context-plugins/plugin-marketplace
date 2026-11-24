import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TraceBatchValidateResponse = {
  updatedCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceBatchValidateResponseSchema: Schema<TraceBatchValidateResponse> =
  s.object<TraceBatchValidateResponse>(
    {
      updatedCount: s.int(),
      _keysMap: {
        updatedCount: "updated_count",
      },
    },
    { additionalProperties: s.json() },
  );
