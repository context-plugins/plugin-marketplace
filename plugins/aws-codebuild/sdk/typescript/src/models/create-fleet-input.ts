import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { computeConfigurationSchema, type ComputeConfiguration } from "./compute-configuration.js";
import {
  computeTypeAwsCodeBuildFleetApiSchema,
  type ComputeTypeAwsCodeBuildFleetApi,
} from "./compute-type-aws-code-build-fleet-api.js";
import { environmentTypeSchema, type EnvironmentType } from "./environment-type.js";
import { overflowBehaviorSchema, type OverflowBehavior } from "./overflow-behavior.js";
import { proxyConfigurationSchema, type ProxyConfiguration } from "./proxy-configuration.js";
import {
  scalingConfigurationInputSchema,
  type ScalingConfigurationInput,
} from "./scaling-configuration-input.js";
import { tagSchema, type Tag } from "./tag.js";
import { vpcConfigSchema, type VpcConfig } from "./vpc-config.js";

export type CreateFleetInput = {
  /** The name of the compute fleet. */
  name: string;
  /**
   * The initial number of machines allocated to the ﬂeet, which deﬁnes the number of builds that
   * can run in parallel.
   */
  baseCapacity: number;
  /**
   * The environment type of the compute fleet. The environment type ARM_CONTAINER is available only
   * in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific
   * (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), EU
   * (Frankfurt), and South America (São Paulo). The environment type ARM_EC2 is available only in
   * regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt),
   * Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São
   * Paulo), and Asia Pacific (Mumbai). The environ
   */
  environmentType: EnvironmentType;
  /**
   * Information about the compute resources the compute fleet uses. Available values include:
   * ATTRIBUTE_BASED_COMPUTE: Specify the amount of vCPUs, memory, disk space, and the type of
   * machine. If you use ATTRIBUTE_BASED_COMPUTE, you must define your attributes by using
   * computeConfiguration. CodeBuild will select the cheapest instance that satisfies your specified
   * attributes. For more information, see Reserved capacity environment types in the CodeBuild User
   * Guide. CUSTOM_INSTANCE_TYPE: Specify the instance type for your compute fleet. For a list of
   * supported instance types, see Supported instance
   */
  computeType: ComputeTypeAwsCodeBuildFleetApi;
  computeConfiguration?: ComputeConfiguration;
  scalingConfiguration?: ScalingConfigurationInput;
  /**
   * The compute fleet overflow behavior. For overflow behavior QUEUE, your overflow builds need to
   * wait on the existing fleet instance to become available. For overflow behavior ON_DEMAND, your
   * overflow builds run on CodeBuild on-demand. If you choose to set your overflow behavior to
   * on-demand while creating a VPC-connected fleet, make sure that you add the required VPC
   * permissions to your project service role. For more information, see Example policy statement to
   * allow CodeBuild access to Amazon Web Services services required to create a VPC network
   * interface.
   */
  overflowBehavior?: OverflowBehavior;
  vpcConfig?: VpcConfig;
  proxyConfiguration?: ProxyConfiguration;
  /** The Amazon Machine Image (AMI) of the compute fleet. */
  imageId?: string;
  /**
   * The service role associated with the compute fleet. For more information, see Allow a user to
   * add a permission policy for a fleet service role in the CodeBuild User Guide.
   */
  fleetServiceRole?: string;
  /**
   * A list of tag key and value pairs associated with this compute fleet. These tags are available
   * for use by Amazon Web Services services that support CodeBuild build project tags.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createFleetInputSchema: Schema<CreateFleetInput> = s.object<CreateFleetInput>(
  {
    name: s.string(),
    baseCapacity: s.int(),
    environmentType: environmentTypeSchema,
    computeType: computeTypeAwsCodeBuildFleetApiSchema,
    computeConfiguration: s.optional(s.lazy(() => computeConfigurationSchema)),
    scalingConfiguration: s.optional(s.lazy(() => scalingConfigurationInputSchema)),
    overflowBehavior: s.optional(s.lazy(() => overflowBehaviorSchema)),
    vpcConfig: s.optional(s.lazy(() => vpcConfigSchema)),
    proxyConfiguration: s.optional(s.lazy(() => proxyConfigurationSchema)),
    imageId: s.optional(s.string()),
    fleetServiceRole: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
