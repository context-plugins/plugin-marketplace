import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiExecuteDataStandardsResponse = {
  dataStandardIds?: string[];
  scanId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiExecuteDataStandardsResponseSchema: Schema<PublicApiExecuteDataStandardsResponse> =
  s.object<PublicApiExecuteDataStandardsResponse>(
    {
      dataStandardIds: s.optional(s.array(s.string())),
      scanId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
