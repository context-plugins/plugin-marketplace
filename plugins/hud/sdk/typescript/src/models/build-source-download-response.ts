import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuildSourceDownloadResponse = {
  buildId: string;
  path: string;
  url: string;
  expiresIn: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildSourceDownloadResponseSchema: Schema<BuildSourceDownloadResponse> =
  s.object<BuildSourceDownloadResponse>(
    {
      buildId: s.string(),
      path: s.string(),
      url: s.string(),
      expiresIn: s.int(),
      _keysMap: {
        buildId: "build_id",
        expiresIn: "expires_in",
      },
    },
    { additionalProperties: s.json() },
  );
