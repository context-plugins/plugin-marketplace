import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1QueryMetadata3Schema,
  type GoogleCloudApigeeV1QueryMetadata3,
} from "./google-cloud-apigee-v1-query-metadata3.js";

export type GoogleCloudApigeeV1AsyncQueryResultView = {
  /** Error message when there is a failure. */
  error?: string;
  /** Metadata contains information like metrics, dimenstions etc of the AsyncQuery. */
  metadata?: GoogleCloudApigeeV1QueryMetadata3;
  /** Error code when there is a failure. */
  code?: number;
  /**
   * Rows of query result. Each row is a JSON object. Example: {sum(message_count): 1,
   * developer_app: "(not set)",…}
   */
  rows?: Record<string, unknown>[];
  /** State of retrieving ResultView. */
  state?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AsyncQueryResultViewSchema: Schema<GoogleCloudApigeeV1AsyncQueryResultView> =
  s.object<GoogleCloudApigeeV1AsyncQueryResultView>(
    {
      error: s.optional(s.string()),
      metadata: s.optional(s.lazy(() => googleCloudApigeeV1QueryMetadata3Schema)),
      code: s.optional(s.int()),
      rows: s.optional(s.array(s.record(s.string(), s.unknown()))),
      state: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
