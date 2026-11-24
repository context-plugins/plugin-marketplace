import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bucketOwnerAccessSchema, type BucketOwnerAccess } from "./bucket-owner-access.js";

export type BuildArtifacts = {
  /** Information about the location of the build artifacts. */
  location?: string;
  /**
   * The SHA-256 hash of the build artifact. You can use this hash along with a checksum tool to
   * confirm file integrity and authenticity. This value is available only if the build project's
   * packaging value is set to ZIP.
   */
  sha256Sum?: string;
  /**
   * The MD5 hash of the build artifact. You can use this hash along with a checksum tool to confirm
   * file integrity and authenticity. This value is available only if the build project's packaging
   * value is set to ZIP.
   */
  md5Sum?: string;
  /**
   * If this flag is set, a name specified in the buildspec file overrides the artifact name. The
   * name specified in a buildspec file is calculated at build time and uses the Shell Command
   * Language. For example, you can append a date and time to your artifact name so that it is
   * always unique.
   */
  overrideArtifactName?: boolean;
  /** Information that tells you if encryption for build artifacts is disabled. */
  encryptionDisabled?: boolean;
  /** An identifier for this artifact definition. */
  artifactIdentifier?: string;
  bucketOwnerAccess?: BucketOwnerAccess;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildArtifactsSchema: Schema<BuildArtifacts> = s.object<BuildArtifacts>(
  {
    location: s.optional(s.string()),
    sha256Sum: s.optional(s.string()),
    md5Sum: s.optional(s.string()),
    overrideArtifactName: s.optional(s.boolean()),
    encryptionDisabled: s.optional(s.boolean()),
    artifactIdentifier: s.optional(s.string()),
    bucketOwnerAccess: s.optional(s.lazy(() => bucketOwnerAccessSchema)),
    _keysMap: {
      sha256Sum: "sha256sum",
      md5Sum: "md5sum",
    },
  },
  { additionalProperties: s.json() },
);
