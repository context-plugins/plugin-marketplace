import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type4AwsCodeBuildSandboxeApiSchema,
  type Type4AwsCodeBuildSandboxeApi,
} from "./type4-aws-code-build-sandboxe-api.js";

export type ProjectFileSystemLocationAwsCodeBuildSandboxeApi = {
  /** The type of the file system. The one supported type is EFS. */
  type?: Type4AwsCodeBuildSandboxeApi;
  /**
   * A string that specifies the location of the file system created by Amazon EFS. Its format is
   * efs-dns-name:/directory-path. You can find the DNS name of file system when you view it in the
   * Amazon EFS console. The directory path is a path to a directory in the file system that
   * CodeBuild mounts. For example, if the DNS name of a file system is
   * fs-abcd1234.efs.us-west-2.amazonaws.com, and its mount directory is my-efs-mount-directory,
   * then the location is fs-abcd1234.efs.us-west-2.amazonaws.com:/my-efs-mount-directory. The
   * directory path in the format efs-dns-name:/directory-path is optional. If y
   */
  location?: string;
  /** The location in the container where you mount the file system. */
  mountPoint?: string;
  /**
   * The name used to access a file system created by Amazon EFS. CodeBuild creates an environment
   * variable by appending the identifier in all capital letters to CODEBUILD_. For example, if you
   * specify my_efs for identifier, a new environment variable is create named CODEBUILD_MY_EFS. The
   * identifier is used to mount your file system.
   */
  identifier?: string;
  /**
   * The mount options for a file system created by Amazon EFS. The default mount options used by
   * CodeBuild are nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2. For more
   * information, see Recommended NFS Mount Options.
   */
  mountOptions?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectFileSystemLocationAwsCodeBuildSandboxeApiSchema: Schema<ProjectFileSystemLocationAwsCodeBuildSandboxeApi> =
  s.object<ProjectFileSystemLocationAwsCodeBuildSandboxeApi>(
    {
      type: s.optional(s.lazy(() => type4AwsCodeBuildSandboxeApiSchema)),
      location: s.optional(s.string()),
      mountPoint: s.optional(s.string()),
      identifier: s.optional(s.string()),
      mountOptions: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
