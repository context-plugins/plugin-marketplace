import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encryptionTypeSchema, type EncryptionType } from "./encryption-type.js";
import {
  googleCloudApihubV1AgentRegistrySyncConfig1Schema,
  type GoogleCloudApihubV1AgentRegistrySyncConfig1,
} from "./google-cloud-apihub-v1-agent-registry-sync-config1.js";

/** Required. Config of the ApiHub instance. */
export type GoogleCloudApihubV1Config2 = {
  /**
   * Optional. The configuration for syncing MCP data in the API Hub instance to the Agent Registry.
   */
  agentRegistrySyncConfig?: GoogleCloudApihubV1AgentRegistrySyncConfig1;
  /**
   * Optional. Encryption type for the region. If the encryption type is CMEK, the cmek_key_name
   * must be provided. If no encryption type is provided, GMEK will be used.
   */
  encryptionType?: EncryptionType;
  /**
   * Optional. The Customer Managed Encryption Key (CMEK) used for data encryption. The CMEK name
   * should follow the format of
   * `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`, where the location
   * must match the instance location. If the CMEK is not provided, a GMEK will be created for the
   * instance.
   */
  cmekKeyName?: string;
  /** Optional. The name of the Vertex AI location where the data store is stored. */
  vertexLocation?: string;
  /**
   * Optional. If true, the search will be disabled for the instance. The default value is false.
   */
  disableSearch?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Config2Schema: Schema<GoogleCloudApihubV1Config2> =
  s.object<GoogleCloudApihubV1Config2>(
    {
      agentRegistrySyncConfig: s.optional(s.lazy(() => googleCloudApihubV1AgentRegistrySyncConfig1Schema)),
      encryptionType: s.optional(s.lazy(() => encryptionTypeSchema)),
      cmekKeyName: s.optional(s.string()),
      vertexLocation: s.optional(s.string()),
      disableSearch: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
