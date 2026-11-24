import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gatewayCapacitySchema, type GatewayCapacity } from "./gateway-capacity.js";
import { hostEnvironmentSchema, type HostEnvironment } from "./host-environment.js";
import { networkInterfaceSchema, type NetworkInterface } from "./network-interface.js";
import {
  supportedGatewayCapacitySchema,
  type SupportedGatewayCapacity,
} from "./supported-gateway-capacity.js";
import { tagSchema, type Tag } from "./tag.js";

export type DescribeGatewayInformationOutput = {
  gatewayArn?: string;
  /**
   * The unique identifier assigned to your gateway during activation. This ID becomes part of the
   * gateway Amazon Resource Name (ARN), which you use as input for other operations.
   */
  gatewayId?: string;
  /** The name you configured for your gateway. */
  gatewayName?: string;
  /** A value that indicates the time zone configured for the gateway. */
  gatewayTimezone?: string;
  /** A value that indicates the operating state of the gateway. */
  gatewayState?: string;
  /** A NetworkInterface array that contains descriptions of the gateway network interfaces. */
  gatewayNetworkInterfaces?: NetworkInterface[];
  /**
   * The type of the gateway. Amazon FSx File Gateway is no longer available to new customers.
   * Existing customers of FSx File Gateway can continue to use the service normally. For
   * capabilities similar to FSx File Gateway, visit this blog post.
   */
  gatewayType?: string;
  /**
   * The date on which an update to the gateway is available. This date is in the time zone of the
   * gateway. If the gateway is not available for an update this field is not returned in the
   * response.
   */
  nextUpdateAvailabilityDate?: string;
  /**
   * The date on which the last software update was applied to the gateway. If the gateway has never
   * been updated, this field does not return a value in the response. This only only exist and
   * returns once it have been chosen and set by the SGW service, based on the OS version of the
   * gateway VM
   */
  lastSoftwareUpdate?: string;
  /** The ID of the Amazon EC2 instance that was used to launch the gateway. */
  ec2InstanceId?: string;
  /** The Amazon Web Services Region where the Amazon EC2 instance is located. */
  ec2InstanceRegion?: string;
  /**
   * A list of up to 50 tags assigned to the gateway, sorted alphabetically by key name. Each tag is
   * a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using
   * the ListTagsForResource API operation.
   */
  tags?: Tag[];
  /** The configuration settings for the virtual private cloud (VPC) endpoint for your gateway. */
  vpcEndpoint?: string;
  /**
   * The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to monitor
   * events in the gateway. This field only only exist and returns once it have been chosen and set
   * by the SGW service, based on the OS version of the gateway VM
   */
  cloudWatchLogGroupArn?: string;
  /**
   * The type of hardware or software platform on which the gateway is running. Tape Gateway is no
   * longer available on Snow Family devices.
   */
  hostEnvironment?: HostEnvironment;
  /** The type of endpoint for your gateway. Valid Values: STANDARD | FIPS */
  endpointType?: string;
  /** Date after which this gateway will not receive software updates for new features. */
  softwareUpdatesEndDate?: string;
  /**
   * Date after which this gateway will not receive software updates for new features and bug fixes.
   */
  deprecationDate?: string;
  /** Specifies the size of the gateway's metadata cache. */
  gatewayCapacity?: GatewayCapacity;
  /**
   * A list of the metadata cache sizes that the gateway can support based on its current hardware
   * specifications.
   */
  supportedGatewayCapacities?: SupportedGatewayCapacity[];
  /**
   * A unique identifier for the specific instance of the host platform running the gateway. This
   * value is only available for certain host environments, and its format depends on the host
   * environment type.
   */
  hostEnvironmentId?: string;
  /** The version number of the software running on the gateway appliance. */
  softwareVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeGatewayInformationOutputSchema: Schema<DescribeGatewayInformationOutput> =
  s.object<DescribeGatewayInformationOutput>(
    {
      gatewayArn: s.optional(s.string()),
      gatewayId: s.optional(s.string()),
      gatewayName: s.optional(s.string()),
      gatewayTimezone: s.optional(s.string()),
      gatewayState: s.optional(s.string()),
      gatewayNetworkInterfaces: s.optional(s.array(s.lazy(() => networkInterfaceSchema))),
      gatewayType: s.optional(s.string()),
      nextUpdateAvailabilityDate: s.optional(s.string()),
      lastSoftwareUpdate: s.optional(s.string()),
      ec2InstanceId: s.optional(s.string()),
      ec2InstanceRegion: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      vpcEndpoint: s.optional(s.string()),
      cloudWatchLogGroupArn: s.optional(s.string()),
      hostEnvironment: s.optional(s.lazy(() => hostEnvironmentSchema)),
      endpointType: s.optional(s.string()),
      softwareUpdatesEndDate: s.optional(s.string()),
      deprecationDate: s.optional(s.string()),
      gatewayCapacity: s.optional(s.lazy(() => gatewayCapacitySchema)),
      supportedGatewayCapacities: s.optional(s.array(s.lazy(() => supportedGatewayCapacitySchema))),
      hostEnvironmentId: s.optional(s.string()),
      softwareVersion: s.optional(s.string()),
      _keysMap: {
        gatewayArn: "GatewayARN",
        gatewayId: "GatewayId",
        gatewayName: "GatewayName",
        gatewayTimezone: "GatewayTimezone",
        gatewayState: "GatewayState",
        gatewayNetworkInterfaces: "GatewayNetworkInterfaces",
        gatewayType: "GatewayType",
        nextUpdateAvailabilityDate: "NextUpdateAvailabilityDate",
        lastSoftwareUpdate: "LastSoftwareUpdate",
        ec2InstanceId: "Ec2InstanceId",
        ec2InstanceRegion: "Ec2InstanceRegion",
        tags: "Tags",
        vpcEndpoint: "VPCEndpoint",
        cloudWatchLogGroupArn: "CloudWatchLogGroupARN",
        hostEnvironment: "HostEnvironment",
        endpointType: "EndpointType",
        softwareUpdatesEndDate: "SoftwareUpdatesEndDate",
        deprecationDate: "DeprecationDate",
        gatewayCapacity: "GatewayCapacity",
        supportedGatewayCapacities: "SupportedGatewayCapacities",
        hostEnvironmentId: "HostEnvironmentId",
        softwareVersion: "SoftwareVersion",
      },
    },
    { additionalProperties: s.json() },
  );
