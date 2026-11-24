import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildIdSchema, type BuildId } from "./unions/build-id.js";
import { downloadUrlSchema, type DownloadUrl } from "./unions/download-url.js";
import { githubUrlSchema, type GithubUrl } from "./unions/github-url.js";

/** Source archive locator for a selected build, plus legacy repo metadata. */
export type RegistrySourceUrlResponse = {
  registryId: string;
  buildId?: BuildId;
  downloadUrl?: DownloadUrl;
  githubUrl?: GithubUrl;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registrySourceUrlResponseSchema: Schema<RegistrySourceUrlResponse> =
  s.object<RegistrySourceUrlResponse>(
    {
      registryId: s.string(),
      buildId: s.optional(s.lazy(() => buildIdSchema)),
      downloadUrl: s.optional(s.lazy(() => downloadUrlSchema)),
      githubUrl: s.optional(s.lazy(() => githubUrlSchema)),
      _keysMap: {
        registryId: "registry_id",
        buildId: "build_id",
        downloadUrl: "download_url",
        githubUrl: "github_url",
      },
    },
    { additionalProperties: s.json() },
  );
