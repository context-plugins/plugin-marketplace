import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { versionSchema, type Version } from "./version.js";

export type SupportedVersions = {
  /** List of supported API versions. */
  versions: Version[];
};

export const supportedVersionsSchema: Schema<SupportedVersions> = s.object<SupportedVersions>({
  versions: s.array(s.lazy(() => versionSchema)),
});
