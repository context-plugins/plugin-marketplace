import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationDeliverdDevReportsApiSchema,
  type ClassificationDeliverdDevReportsApi,
} from "./classification-deliverd-dev-reports-api.js";
import { fileInternalSchema, fileSchema, type File } from "./file.js";
import { audience1InternalSchema, audience1Schema, type Audience1 } from "./unions/audience1.js";

export type ApiV1ReportsRequest = {
  title?: string;
  slug?: string;
  description?: string;
  workspaceId?: string;
  audience?: Audience1[];
  classification?: ClassificationDeliverdDevReportsApi;
  living?: boolean;
  sourceTool?: string;
  sourceModel?: string;
  changeSummary?: string;
  expectedVersion?: number;
  flowId?: string;
  taskId?: string;
  stage?: boolean;
  uploadId?: string;
  content?: string;
  files?: File[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsRequestProperties: s.Shape<ApiV1ReportsRequest> = {
  title: s.optional(s.string()),
  slug: s.optional(s.string()),
  description: s.optional(s.string()),
  workspaceId: s.optional(s.string()),
  audience: s.optional(s.array(s.lazy(() => audience1InternalSchema))),
  classification: s.optional(s.lazy(() => classificationDeliverdDevReportsApiSchema)),
  living: s.optional(s.boolean()),
  sourceTool: s.optional(s.string()),
  sourceModel: s.optional(s.string()),
  changeSummary: s.optional(s.string()),
  expectedVersion: s.optional(s.int()),
  flowId: s.optional(s.string()),
  taskId: s.optional(s.string()),
  stage: s.optional(s.boolean()),
  uploadId: s.optional(s.string()),
  content: s.optional(s.string()),
  files: s.optional(s.array(s.lazy(() => fileInternalSchema))),
};

export const apiV1ReportsRequestInternalSchema: Schema<ApiV1ReportsRequest> = s.object<ApiV1ReportsRequest>(
  apiV1ReportsRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1ReportsRequestSchema: Schema<ApiV1ReportsRequest> = s.lazySchema(() =>
  s.object<ApiV1ReportsRequest>(
    {
      ...apiV1ReportsRequestProperties,
      title: s.optional(s.string().check(s.minLength(1), s.maxLength(300))),
      slug: s.optional(
        s
          .string()
          .check(
            s.minLength(1),
            s.maxLength(200),
            s.pattern("^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\\/[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)*$"),
          ),
      ),
      description: s.optional(s.string().check(s.maxLength(2000))),
      audience: s.optional(s.array(s.lazy(() => audience1Schema))),
      sourceTool: s.optional(s.string().check(s.maxLength(100))),
      sourceModel: s.optional(s.string().check(s.maxLength(100))),
      changeSummary: s.optional(s.string().check(s.maxLength(1000))),
      expectedVersion: s.optional(s.int().check(s.gte(0))),
      content: s.optional(s.string().check(s.maxLength(2097152))),
      files: s.optional(s.array(s.lazy(() => fileSchema)).check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
