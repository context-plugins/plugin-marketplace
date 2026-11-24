import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuildSourcePreviewResponse = {
  buildId: string;
  path: string;
  content: string;
  size: number;
  contentHash: string;
  contentType: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildSourcePreviewResponseSchema: Schema<BuildSourcePreviewResponse> =
  s.object<BuildSourcePreviewResponse>(
    {
      buildId: s.string(),
      path: s.string(),
      content: s.string(),
      size: s.int(),
      contentHash: s.string(),
      contentType: s.string(),
      _keysMap: {
        buildId: "build_id",
        contentHash: "content_hash",
        contentType: "content_type",
      },
    },
    { additionalProperties: s.json() },
  );
