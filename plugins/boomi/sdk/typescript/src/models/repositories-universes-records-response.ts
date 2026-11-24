import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { goldenRecordSchema, type GoldenRecord } from "./golden-record.js";

export type RepositoriesUniversesRecordsResponse = {
  records?: GoldenRecord[];
  /** Token for retrieving the next page of results. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repositoriesUniversesRecordsResponseSchema: Schema<RepositoriesUniversesRecordsResponse> =
  s.object<RepositoriesUniversesRecordsResponse>(
    {
      records: s.optional(s.array(s.lazy(() => goldenRecordSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
