import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { versionInfoSchema, type VersionInfo } from "./version-info.js";

/** List versions response. */
export type ListVersionsResponse = {
  /** List of versions. */
  versions: VersionInfo[];
};

export const listVersionsResponseSchema: Schema<ListVersionsResponse> = s.object<ListVersionsResponse>({
  versions: s.array(s.lazy(() => versionInfoSchema)),
});
