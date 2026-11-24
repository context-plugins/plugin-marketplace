import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  syncRunHightouchSyncsApiSchema,
  type SyncRunHightouchSyncsApi,
} from "./sync-run-hightouch-syncs-api.js";

export type SyncsRunsResponse = {
  hasMore: boolean;
  data: SyncRunHightouchSyncsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncsRunsResponseSchema: Schema<SyncsRunsResponse> = s.object<SyncsRunsResponse>(
  {
    hasMore: s.boolean(),
    data: s.array(s.lazy(() => syncRunHightouchSyncsApiSchema)),
  },
  { additionalProperties: s.json() },
);
