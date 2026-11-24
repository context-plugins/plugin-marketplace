import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bucketOwnerAccessSchema, type BucketOwnerAccess } from "./bucket-owner-access.js";
import { namespaceTypeSchema, type NamespaceType } from "./namespace-type.js";
import { packagingSchema, type Packaging } from "./packaging.js";
import { type6Schema, type Type6 } from "./type6.js";

export type ProjectArtifacts = {
  /**
   * The type of build output artifact. Valid values include: CODEPIPELINE: The build project has
   * build output generated through CodePipeline. The CODEPIPELINE type is not supported for
   * secondaryArtifacts. NO_ARTIFACTS: The build project does not produce any build output. S3: The
   * build project stores build output in Amazon S3.
   */
  type: Type6;
  /**
   * Information about the build output artifact location: If type is set to CODEPIPELINE,
   * CodePipeline ignores this value if specified. This is because CodePipeline manages its build
   * output locations instead of CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if
   * specified, because no build output is produced. If type is set to S3, this is the name of the
   * output bucket.
   */
  location?: string;
  /**
   * Along with namespaceType and name, the pattern that CodeBuild uses to name and store the output
   * artifact: If type is set to CODEPIPELINE, CodePipeline ignores this value if specified. This is
   * because CodePipeline manages its build output names instead of CodeBuild. If type is set to
   * NO_ARTIFACTS, this value is ignored if specified, because no build output is produced. If type
   * is set to S3, this is the path to the output artifact. If path is not specified, path is not
   * used. For example, if path is set to MyArtifacts, namespaceType is set to NONE, and name is set
   * to MyArtifact.zip, the output ar
   */
  path?: string;
  /**
   * Along with path and name, the pattern that CodeBuild uses to determine the name and location to
   * store the output artifact: If type is set to CODEPIPELINE, CodePipeline ignores this value if
   * specified. This is because CodePipeline manages its build output names instead of CodeBuild. If
   * type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is
   * produced. If type is set to S3, valid values include: BUILD_ID: Include the build ID in the
   * location of the build output artifact. NONE: Do not include the build ID. This is the default
   * if namespaceType is not specified. F
   */
  namespaceType?: NamespaceType;
  /**
   * Along with path and namespaceType, the pattern that CodeBuild uses to name and store the output
   * artifact: If type is set to CODEPIPELINE, CodePipeline ignores this value if specified. This is
   * because CodePipeline manages its build output names instead of CodeBuild. If type is set to
   * NO_ARTIFACTS, this value is ignored if specified, because no build output is produced. If type
   * is set to S3, this is the name of the output artifact object. If you set the name to be a
   * forward slash ("/"), the artifact is stored in the root of the output bucket. For example: If
   * path is set to MyArtifacts, namespace
   */
  name?: string;
  /**
   * The type of build output artifact to create: If type is set to CODEPIPELINE, CodePipeline
   * ignores this value if specified. This is because CodePipeline manages its build output
   * artifacts instead of CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if
   * specified, because no build output is produced. If type is set to S3, valid values include:
   * NONE: CodeBuild creates in the output bucket a folder that contains the build output. This is
   * the default if packaging is not specified. ZIP: CodeBuild creates in the output bucket a ZIP
   * file that contains the build output.
   */
  packaging?: Packaging;
  /**
   * If this flag is set, a name specified in the buildspec file overrides the artifact name. The
   * name specified in a buildspec file is calculated at build time and uses the Shell Command
   * Language. For example, you can append a date and time to your artifact name so that it is
   * always unique.
   */
  overrideArtifactName?: boolean;
  /**
   * Set to true if you do not want your output artifacts encrypted. This option is valid only if
   * your artifacts type is Amazon S3. If this is set with another artifacts type, an
   * invalidInputException is thrown.
   */
  encryptionDisabled?: boolean;
  /** An identifier for this artifact definition. */
  artifactIdentifier?: string;
  bucketOwnerAccess?: BucketOwnerAccess;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectArtifactsSchema: Schema<ProjectArtifacts> = s.object<ProjectArtifacts>(
  {
    type: type6Schema,
    location: s.optional(s.string()),
    path: s.optional(s.string()),
    namespaceType: s.optional(s.lazy(() => namespaceTypeSchema)),
    name: s.optional(s.string()),
    packaging: s.optional(s.lazy(() => packagingSchema)),
    overrideArtifactName: s.optional(s.boolean()),
    encryptionDisabled: s.optional(s.boolean()),
    artifactIdentifier: s.optional(s.string()),
    bucketOwnerAccess: s.optional(s.lazy(() => bucketOwnerAccessSchema)),
  },
  { additionalProperties: s.json() },
);
