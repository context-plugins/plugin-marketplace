import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for triggering a new deployment. */
export type CreateDeploymentRequest = {
  /** The UID or reference to the previously uploaded build artifact. */
  uploadUid?: string;
  /** The git branch to deploy from when using repository-linked deployments. */
  branch?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDeploymentRequestSchema: Schema<CreateDeploymentRequest> =
  s.object<CreateDeploymentRequest>(
    {
      uploadUid: s.optional(s.string()),
      branch: s.optional(s.string()),
      _keysMap: {
        uploadUid: "upload_uid",
      },
    },
    { additionalProperties: s.json() },
  );
