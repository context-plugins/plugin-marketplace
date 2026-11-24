import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PostHistoryImportRetryRequest = {
  teamId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostHistoryImportRetryRequestSchema: Schema<ApiV1PostHistoryImportRetryRequest> =
  s.object<ApiV1PostHistoryImportRetryRequest>(
    {
      teamId: s.string(),
    },
    { additionalProperties: s.json() },
  );
