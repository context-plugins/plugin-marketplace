import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuildStatusConfig = {
  /**
   * Specifies the context of the build status CodeBuild sends to the source provider. The usage of
   * this parameter depends on the source provider. Bitbucket This parameter is used for the name
   * parameter in the Bitbucket commit status. For more information, see build in the Bitbucket API
   * documentation. GitHub/GitHub Enterprise Server This parameter is used for the context parameter
   * in the GitHub commit status. For more information, see Create a commit status in the GitHub
   * developer guide.
   */
  context?: string;
  /**
   * Specifies the target url of the build status CodeBuild sends to the source provider. The usage
   * of this parameter depends on the source provider. Bitbucket This parameter is used for the url
   * parameter in the Bitbucket commit status. For more information, see build in the Bitbucket API
   * documentation. GitHub/GitHub Enterprise Server This parameter is used for the target_url
   * parameter in the GitHub commit status. For more information, see Create a commit status in the
   * GitHub developer guide.
   */
  targetUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildStatusConfigSchema: Schema<BuildStatusConfig> = s.object<BuildStatusConfig>(
  {
    context: s.optional(s.string()),
    targetUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
