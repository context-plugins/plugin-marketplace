from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .compute_configuration import ComputeConfiguration, ComputeConfigurationDict
from .docker_server_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    DockerServerAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
    DockerServerAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict,
)
from .enums.compute_type_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    ComputeTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr,
)
from .enums.host_kernel import HostKernelOrStr
from .enums.image_pull_credentials_type import ImagePullCredentialsTypeOrStr
from .enums.type3_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr,
)
from .environment_variable_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api import (
    EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
    EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict,
)
from .project_fleet import ProjectFleet, ProjectFleetDict
from .registry_credential import RegistryCredential, RegistryCredentialDict


class ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi(SdkBaseModel):
    type_: Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr = Field(alias="type")
    """The type of build environment to use for related builds. If you're using compute fleets during project creation,
    type will be ignored. For more information, see Build environment compute types in the CodeBuild user guide."""

    image: str
    """The image tag or image digest that identifies the Docker image to use for this build project. Use the following
    formats: For an image tag: /:. For example, in the Docker repository that CodeBuild uses to manage its Docker
    images, this would be aws/codebuild/standard:4.0. For an image digest: /@. For example, to specify an image with the
    digest "sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf," use
    /@sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf. For more information, see Docker images
    provided by CodeBuild in the CodeBuild user guide."""

    compute_type: ComputeTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr = Field(
        alias="computeType"
    )
    """Information about the compute resources the build project uses. Available values include:
    ATTRIBUTE_BASED_COMPUTE: Specify the amount of vCPUs, memory, disk space, and the type of machine. If you use
    ATTRIBUTE_BASED_COMPUTE, you must define your attributes by using computeConfiguration. CodeBuild will select the
    cheapest instance that satisfies your specified attributes. For more information, see Reserved capacity environment
    types in the CodeBuild User Guide. BUILD_GENERAL1_SMALL: Use up to 4 GiB memory and 2 vCPUs for builds.
    BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs for buil"""

    compute_configuration: Optional[ComputeConfiguration] = Field(default=UNSET, alias="computeConfiguration")
    fleet: Optional[ProjectFleet] = UNSET
    environment_variables: Optional[
        list[EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
    ] = Field(default=UNSET, alias="environmentVariables")
    """A set of environment variables to make available to builds for this build project."""

    privileged_mode: Optional[bool] = Field(default=UNSET, alias="privilegedMode")
    """Enables running the Docker daemon inside a Docker container. Set to true only if the build project is used to
    build Docker images. Otherwise, a build that attempts to interact with the Docker daemon fails. The default setting
    is false. You can initialize the Docker daemon during the install phase of your build by adding one of the following
    sets of commands to the install phase of your buildspec file: If the operating system's base image is Ubuntu Linux:
    - nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375
    --storage-driver=overlay& - timeout 15 sh -c "unt"""

    certificate: Optional[str] = UNSET
    """The ARN of the Amazon S3 bucket, path prefix, and object key that contains the PEM-encoded certificate for the
    build project. For more information, see certificate in the CodeBuild User Guide."""

    registry_credential: Optional[RegistryCredential] = Field(default=UNSET, alias="registryCredential")
    image_pull_credentials_type: Optional[ImagePullCredentialsTypeOrStr] = Field(
        default=UNSET, alias="imagePullCredentialsType"
    )
    """The type of credentials CodeBuild uses to pull images in your build. There are two valid values: CODEBUILD
    specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust
    CodeBuild service principal. SERVICE_ROLE specifies that CodeBuild uses your build project's service role. When you
    use a cross-account or private registry image, you must use SERVICE_ROLE credentials. When you use an CodeBuild
    curated image, you must use CODEBUILD credentials."""

    docker_server: Optional[DockerServerAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi] = Field(
        default=UNSET, alias="dockerServer"
    )
    host_kernel: Optional[HostKernelOrStr] = Field(default=UNSET, alias="hostKernel")
    """The host operating system kernel used for on-demand builds in the build project. The host kernel does not affect
    the build environment operating system, which is determined by the image you specify. Valid values are:
    LINUX_KERNEL_4: Runs on an Amazon Linux 2 host (kernel 4.x). LINUX_KERNEL_6: Runs on an Amazon Linux 2023 host
    (kernel 6.x). LINUX_KERNEL_LATEST: Runs on the latest supported host kernel. This setting applies to the
    LINUX_CONTAINER, ARM_CONTAINER, LINUX_EC2, and ARM_EC2 environment types. It is not applicable to Windows, Lambda,
    or Mac environment types."""


class ProjectEnvironmentAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict(TypedDict):
    type_: Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr
    image: str
    compute_type: ComputeTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr
    compute_configuration: NotRequired[ComputeConfigurationDict]
    fleet: NotRequired[ProjectFleetDict]
    environment_variables: NotRequired[
        list[EnvironmentVariableAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict]
    ]
    privileged_mode: NotRequired[bool]
    certificate: NotRequired[str]
    registry_credential: NotRequired[RegistryCredentialDict]
    image_pull_credentials_type: NotRequired[ImagePullCredentialsTypeOrStr]
    docker_server: NotRequired[DockerServerAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiDict]
    host_kernel: NotRequired[HostKernelOrStr]
