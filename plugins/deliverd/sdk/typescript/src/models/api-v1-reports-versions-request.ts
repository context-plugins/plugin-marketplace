import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileInternalSchema, fileSchema, type File } from "./file.js";

export type ApiV1ReportsVersionsRequest = {
  uploadId?: string;
  content?: string;
  files?: File[];
  title?: string;
  description?: string;
  sourceTool?: string;
  sourceModel?: string;
  changeSummary?: string;
  expectedVersion?: number;
  stage?: boolean;
  taskId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsVersionsRequestProperties: s.Shape<ApiV1ReportsVersionsRequest> = {
  uploadId: s.optional(s.string()),
  content: s.optional(s.string()),
  files: s.optional(s.array(s.lazy(() => fileInternalSchema))),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  sourceTool: s.optional(s.string()),
  sourceModel: s.optional(s.string()),
  changeSummary: s.optional(s.string()),
  expectedVersion: s.optional(s.int()),
  stage: s.optional(s.boolean()),
  taskId: s.optional(s.string()),
};

export const apiV1ReportsVersionsRequestInternalSchema: Schema<ApiV1ReportsVersionsRequest> =
  s.object<ApiV1ReportsVersionsRequest>(apiV1ReportsVersionsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ReportsVersionsRequestSchema: Schema<ApiV1ReportsVersionsRequest> = s.lazySchema(() =>
  s.object<ApiV1ReportsVersionsRequest>(
    {
      ...apiV1ReportsVersionsRequestProperties,
      content: s.optional(s.string().check(s.maxLength(2097152))),
      files: s.optional(s.array(s.lazy(() => fileSchema)).check(s.maxLength(50))),
      title: s.optional(s.string().check(s.minLength(1), s.maxLength(300))),
      description: s.optional(s.string().check(s.maxLength(2000))),
      sourceTool: s.optional(s.string().check(s.maxLength(100))),
      sourceModel: s.optional(s.string().check(s.maxLength(100))),
      changeSummary: s.optional(s.string().check(s.maxLength(1000))),
      expectedVersion: s.optional(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
