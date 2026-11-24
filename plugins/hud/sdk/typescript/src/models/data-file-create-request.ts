import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Scope, scopeSchema } from "./scope.js";
import { pipelineKeyInternalSchema, pipelineKeySchema, type PipelineKey } from "./unions/pipeline-key.js";

/** A reservation for an upload the client is about to make. */
export type DataFileCreateRequest = {
  filename: string;
  sizeBytes: number;
  /** @default "application/octet-stream" */
  contentType?: string;
  /** @default Scope.Member */
  scope?: Scope;
  /**
   * Reserve the file as the input of this data pipeline, which may take a file larger than the data
   * store's per-file limit
   */
  pipelineKey?: PipelineKey;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dataFileCreateRequestProperties: s.Shape<DataFileCreateRequest> = {
  filename: s.string(),
  sizeBytes: s.int(),
  contentType: s.defaulted(s.string(), "application/octet-stream"),
  scope: s.defaulted(scopeSchema, Scope.Member),
  pipelineKey: s.optional(s.lazy(() => pipelineKeyInternalSchema)),
  _keysMap: {
    sizeBytes: "size_bytes",
    contentType: "content_type",
    pipelineKey: "pipeline_key",
  },
};

export const dataFileCreateRequestInternalSchema: Schema<DataFileCreateRequest> =
  s.object<DataFileCreateRequest>(dataFileCreateRequestProperties, { additionalProperties: s.json() });

export const dataFileCreateRequestSchema: Schema<DataFileCreateRequest> = s.lazySchema(() =>
  s.object<DataFileCreateRequest>(
    {
      ...dataFileCreateRequestProperties,
      filename: s.string().check(s.minLength(1), s.maxLength(255)),
      sizeBytes: s.int().check(s.gte(0)),
      contentType: s.defaulted(
        s.string().check(s.minLength(3), s.maxLength(200)),
        "application/octet-stream",
      ),
      pipelineKey: s.optional(s.lazy(() => pipelineKeySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
