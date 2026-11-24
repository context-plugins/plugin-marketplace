import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cacheAttributesSchema, type CacheAttributes } from "./cache-attributes.js";
import {
  endpointNetworkConfigurationSchema,
  type EndpointNetworkConfiguration,
} from "./endpoint-network-configuration.js";
import { tagSchema, type Tag } from "./tag.js";

export type AssociateFileSystemInput = {
  /**
   * The user name of the user credential that has permission to access the root share D$ of the
   * Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user
   * group.
   */
  userName: string;
  /** The password of the user credential. */
  password: string;
  /**
   * A unique string value that you supply that is used by the FSx File Gateway to ensure idempotent
   * file system association creation.
   */
  clientToken: string;
  gatewayArn: string;
  /**
   * The Amazon Resource Name (ARN) of the Amazon FSx file system to associate with the FSx File
   * Gateway.
   */
  locationArn: string;
  /**
   * A list of up to 50 tags that can be assigned to the file system association. Each tag is a
   * key-value pair.
   */
  tags?: Tag[];
  /** The Amazon Resource Name (ARN) of the storage used for the audit logs. */
  auditDestinationArn?: string;
  cacheAttributes?: CacheAttributes;
  endpointNetworkConfiguration?: EndpointNetworkConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associateFileSystemInputSchema: Schema<AssociateFileSystemInput> =
  s.object<AssociateFileSystemInput>(
    {
      userName: s.string(),
      password: s.string(),
      clientToken: s.string(),
      gatewayArn: s.string(),
      locationArn: s.string(),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      auditDestinationArn: s.optional(s.string()),
      cacheAttributes: s.optional(s.lazy(() => cacheAttributesSchema)),
      endpointNetworkConfiguration: s.optional(s.lazy(() => endpointNetworkConfigurationSchema)),
      _keysMap: {
        userName: "UserName",
        password: "Password",
        clientToken: "ClientToken",
        gatewayArn: "GatewayARN",
        locationArn: "LocationARN",
        tags: "Tags",
        auditDestinationArn: "AuditDestinationARN",
        cacheAttributes: "CacheAttributes",
        endpointNetworkConfiguration: "EndpointNetworkConfiguration",
      },
    },
    { additionalProperties: s.json() },
  );
