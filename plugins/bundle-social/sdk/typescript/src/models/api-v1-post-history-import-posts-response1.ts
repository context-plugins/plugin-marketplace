import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PostHistoryImportPostsResponse1 = {
  deletedCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostHistoryImportPostsResponse1Schema: Schema<ApiV1PostHistoryImportPostsResponse1> =
  s.object<ApiV1PostHistoryImportPostsResponse1>(
    {
      deletedCount: s.float64(),
    },
    { additionalProperties: s.json() },
  );
