import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1CircleCiRestApiV1SshKeyApiSchema,
  type Type1CircleCiRestApiV1SshKeyApi,
} from "./type1-circle-ci-rest-api-v1-ssh-key-api.js";

export type ProjectProjectCheckoutKeyRequest = {
  /** The type of checkout key to create */
  type: Type1CircleCiRestApiV1SshKeyApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectProjectCheckoutKeyRequestSchema: Schema<ProjectProjectCheckoutKeyRequest> =
  s.object<ProjectProjectCheckoutKeyRequest>(
    {
      type: type1CircleCiRestApiV1SshKeyApiSchema,
    },
    { additionalProperties: s.json() },
  );
