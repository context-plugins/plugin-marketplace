import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { computeConfigurationSchema, type ComputeConfiguration } from "./compute-configuration.js";
import { computeType1Schema, type ComputeType1 } from "./compute-type1.js";
import { dockerServerSchema, type DockerServer } from "./docker-server.js";
import { environmentVariableSchema, type EnvironmentVariable } from "./environment-variable.js";
import { hostKernelSchema, type HostKernel } from "./host-kernel.js";
import {
  imagePullCredentialsTypeSchema,
  type ImagePullCredentialsType,
} from "./image-pull-credentials-type.js";
import { projectFleetSchema, type ProjectFleet } from "./project-fleet.js";
import { registryCredentialSchema, type RegistryCredential } from "./registry-credential.js";
import { type1Schema, type Type1 } from "./type1.js";

export type ProjectEnvironment = {
  /**
   * The type of build environment to use for related builds. If you're using compute fleets during
   * project creation, type will be ignored. For more information, see Build environment compute
   * types in the CodeBuild user guide.
   */
  type: Type1;
  /**
   * The image tag or image digest that identifies the Docker image to use for this build project.
   * Use the following formats: For an image tag: /:. For example, in the Docker repository that
   * CodeBuild uses to manage its Docker images, this would be aws/codebuild/standard:4.0. For an
   * image digest: /@. For example, to specify an image with the digest
   * "sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf," use
   * /@sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf. For more
   * information, see Docker images provided by CodeBuild in the CodeBuild user guide.
   */
  image: string;
  /**
   * Information about the compute resources the build project uses. Available values include:
   * ATTRIBUTE_BASED_COMPUTE: Specify the amount of vCPUs, memory, disk space, and the type of
   * machine. If you use ATTRIBUTE_BASED_COMPUTE, you must define your attributes by using
   * computeConfiguration. CodeBuild will select the cheapest instance that satisfies your specified
   * attributes. For more information, see Reserved capacity environment types in the CodeBuild User
   * Guide. BUILD_GENERAL1_SMALL: Use up to 4 GiB memory and 2 vCPUs for builds.
   * BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs for buil
   */
  computeType: ComputeType1;
  computeConfiguration?: ComputeConfiguration;
  fleet?: ProjectFleet;
  /** A set of environment variables to make available to builds for this build project. */
  environmentVariables?: EnvironmentVariable[];
  /**
   * Enables running the Docker daemon inside a Docker container. Set to true only if the build
   * project is used to build Docker images. Otherwise, a build that attempts to interact with the
   * Docker daemon fails. The default setting is false. You can initialize the Docker daemon during
   * the install phase of your build by adding one of the following sets of commands to the install
   * phase of your buildspec file: If the operating system's base image is Ubuntu Linux: - nohup
   * /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375
   * --storage-driver=overlay& - timeout 15 sh -c "unt
   */
  privilegedMode?: boolean;
  /**
   * The ARN of the Amazon S3 bucket, path prefix, and object key that contains the PEM-encoded
   * certificate for the build project. For more information, see certificate in the CodeBuild User
   * Guide.
   */
  certificate?: string;
  registryCredential?: RegistryCredential;
  /**
   * The type of credentials CodeBuild uses to pull images in your build. There are two valid
   * values: CODEBUILD specifies that CodeBuild uses its own credentials. This requires that you
   * modify your ECR repository policy to trust CodeBuild service principal. SERVICE_ROLE specifies
   * that CodeBuild uses your build project's service role. When you use a cross-account or private
   * registry image, you must use SERVICE_ROLE credentials. When you use an CodeBuild curated image,
   * you must use CODEBUILD credentials.
   */
  imagePullCredentialsType?: ImagePullCredentialsType;
  dockerServer?: DockerServer;
  /**
   * The host operating system kernel used for on-demand builds in the build project. The host
   * kernel does not affect the build environment operating system, which is determined by the image
   * you specify. Valid values are: LINUX_KERNEL_4: Runs on an Amazon Linux 2 host (kernel 4.x).
   * LINUX_KERNEL_6: Runs on an Amazon Linux 2023 host (kernel 6.x). LINUX_KERNEL_LATEST: Runs on
   * the latest supported host kernel. This setting applies to the LINUX_CONTAINER, ARM_CONTAINER,
   * LINUX_EC2, and ARM_EC2 environment types. It is not applicable to Windows, Lambda, or Mac
   * environment types.
   */
  hostKernel?: HostKernel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectEnvironmentSchema: Schema<ProjectEnvironment> = s.object<ProjectEnvironment>(
  {
    type: type1Schema,
    image: s.string(),
    computeType: computeType1Schema,
    computeConfiguration: s.optional(s.lazy(() => computeConfigurationSchema)),
    fleet: s.optional(s.lazy(() => projectFleetSchema)),
    environmentVariables: s.optional(s.array(s.lazy(() => environmentVariableSchema))),
    privilegedMode: s.optional(s.boolean()),
    certificate: s.optional(s.string()),
    registryCredential: s.optional(s.lazy(() => registryCredentialSchema)),
    imagePullCredentialsType: s.optional(s.lazy(() => imagePullCredentialsTypeSchema)),
    dockerServer: s.optional(s.lazy(() => dockerServerSchema)),
    hostKernel: s.optional(s.lazy(() => hostKernelSchema)),
  },
  { additionalProperties: s.json() },
);
