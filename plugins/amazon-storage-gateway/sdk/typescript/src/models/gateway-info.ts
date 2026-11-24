import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { hostEnvironmentSchema, type HostEnvironment } from "./host-environment.js";

export type GatewayInfo = {
  /**
   * The unique identifier assigned to your gateway during activation. This ID becomes part of the
   * gateway Amazon Resource Name (ARN), which you use as input for other operations.
   */
  gatewayId?: string;
  /**
   * The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list
   * of gateways for your account and Amazon Web Services Region.
   */
  gatewayArn?: string;
  /**
   * The type of the gateway. Amazon FSx File Gateway is no longer available to new customers.
   * Existing customers of FSx File Gateway can continue to use the service normally. For
   * capabilities similar to FSx File Gateway, visit this blog post.
   */
  gatewayType?: string;
  /** The state of the gateway. Valid Values: DISABLED | ACTIVE */
  gatewayOperationalState?: string;
  /** The name of the gateway. */
  gatewayName?: string;
  /** The ID of the Amazon EC2 instance that was used to launch the gateway. */
  ec2InstanceId?: string;
  /** The Amazon Web Services Region where the Amazon EC2 instance is located. */
  ec2InstanceRegion?: string;
  /**
   * The type of hardware or software platform on which the gateway is running. Tape Gateway is no
   * longer available on Snow Family devices.
   */
  hostEnvironment?: HostEnvironment;
  /**
   * A unique identifier for the specific instance of the host platform running the gateway. This
   * value is only available for certain host environments, and its format depends on the host
   * environment type.
   */
  hostEnvironmentId?: string;
  /**
   * Date after which this gateway will not receive software updates for new features and bug fixes.
   */
  deprecationDate?: string;
  /** The version number of the software running on the gateway appliance. */
  softwareVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gatewayInfoSchema: Schema<GatewayInfo> = s.object<GatewayInfo>(
  {
    gatewayId: s.optional(s.string()),
    gatewayArn: s.optional(s.string()),
    gatewayType: s.optional(s.string()),
    gatewayOperationalState: s.optional(s.string()),
    gatewayName: s.optional(s.string()),
    ec2InstanceId: s.optional(s.string()),
    ec2InstanceRegion: s.optional(s.string()),
    hostEnvironment: s.optional(s.lazy(() => hostEnvironmentSchema)),
    hostEnvironmentId: s.optional(s.string()),
    deprecationDate: s.optional(s.string()),
    softwareVersion: s.optional(s.string()),
    _keysMap: {
      gatewayId: "GatewayId",
      gatewayArn: "GatewayARN",
      gatewayType: "GatewayType",
      gatewayOperationalState: "GatewayOperationalState",
      gatewayName: "GatewayName",
      ec2InstanceId: "Ec2InstanceId",
      ec2InstanceRegion: "Ec2InstanceRegion",
      hostEnvironment: "HostEnvironment",
      hostEnvironmentId: "HostEnvironmentId",
      deprecationDate: "DeprecationDate",
      softwareVersion: "SoftwareVersion",
    },
  },
  { additionalProperties: s.json() },
);
