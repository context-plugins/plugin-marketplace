import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationLogsDataSourceSchema,
  type ConversationLogsDataSource,
} from "./conversation-logs-data-source.js";

export type TestSetGenerationDataSource = {
  conversationLogsDataSource?: ConversationLogsDataSource;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetGenerationDataSourceSchema: Schema<TestSetGenerationDataSource> =
  s.object<TestSetGenerationDataSource>(
    {
      conversationLogsDataSource: s.optional(s.lazy(() => conversationLogsDataSourceSchema)),
    },
    { additionalProperties: s.json() },
  );
