import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";
import { metaSchema, type Meta } from "./meta.js";

export type V1BuildingsByUrlResponse = {
  data?: Data;
  meta?: Meta;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1BuildingsByUrlResponseSchema: Schema<V1BuildingsByUrlResponse> =
  s.object<V1BuildingsByUrlResponse>(
    {
      data: s.optional(s.lazy(() => dataSchema)),
      meta: s.optional(s.lazy(() => metaSchema)),
      requestId: s.optional(s.string()),
      _keysMap: {
        requestId: "request_id",
      },
    },
    { additionalProperties: s.json() },
  );
