import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authMethodSchema, type AuthMethod } from "./auth-method.js";
import { listApiSchema, type ListApi } from "./list-api.js";
import { protocolSchema, type Protocol } from "./protocol.js";
import { requestModelSchema, type RequestModel } from "./request-model.js";

/**
 * S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible
 * data providers.
 */
export type S3CompatibleMetadata = {
  /**
   * Specifies the API request model used to call the storage service. When not specified, the
   * default value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used.
   */
  requestModel?: RequestModel;
  /**
   * Specifies the network protocol of the agent. When not specified, the default value of
   * NetworkProtocol NETWORK_PROTOCOL_HTTPS is used.
   */
  protocol?: Protocol;
  /**
   * Specifies the authentication and authorization method used by the storage service. When not
   * specified, Transfer Service will attempt to determine right auth method to use.
   */
  authMethod?: AuthMethod;
  /**
   * The Listing API to use for discovering objects. When not specified, Transfer Service will
   * attempt to determine the right API to use.
   */
  listApi?: ListApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const s3CompatibleMetadataSchema: Schema<S3CompatibleMetadata> = s.object<S3CompatibleMetadata>(
  {
    requestModel: s.optional(s.lazy(() => requestModelSchema)),
    protocol: s.optional(s.lazy(() => protocolSchema)),
    authMethod: s.optional(s.lazy(() => authMethodSchema)),
    listApi: s.optional(s.lazy(() => listApiSchema)),
  },
  { additionalProperties: s.json() },
);
