import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AppGroupAppKey2Schema,
  type GoogleCloudApigeeV1AppGroupAppKey2,
} from "./google-cloud-apigee-v1-app-group-app-key2.js";

/** Request for UpdateAppGroupAppKey */
export type GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest = {
  /**
   * Note that only Scopes and Attributes of the AppGroupAppKey can be amended. Scopes and
   * Attributes mentioned in the request will be inserted and the existing scopes and attributes
   * will be removed.
   */
  appGroupAppKey?: GoogleCloudApigeeV1AppGroupAppKey2;
  /**
   * Approve or revoke the consumer key by setting this value to `approve` or `revoke` respectively.
   * The `Content-Type` header, if set, must be set to `application/octet-stream`, with empty body.
   */
  action?: string;
  /**
   * The list of API products that will be associated with the credential. This list will be
   * appended to the existing list of associated API Products for this App Key. Duplicates will be
   * ignored.
   */
  apiProducts?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1UpdateAppGroupAppKeyRequestSchema: Schema<GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest> =
  s.object<GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest>(
    {
      appGroupAppKey: s.optional(s.lazy(() => googleCloudApigeeV1AppGroupAppKey2Schema)),
      action: s.optional(s.string()),
      apiProducts: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
