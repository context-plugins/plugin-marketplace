import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { newsResponseMetaDataSchema, type NewsResponseMetaData } from "./news-response-meta-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetNewsResponse = {
  status?: Status;
  data?: Record<string, unknown>;
  metadata?: NewsResponseMetaData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getNewsResponseSchema: Schema<GetNewsResponse> = s.object<GetNewsResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.record(s.string(), s.unknown())),
    metadata: s.optional(s.lazy(() => newsResponseMetaDataSchema)),
  },
  { additionalProperties: s.json() },
);
