from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(str, Enum):
    """A container type for this batch build that overrides the one specified in the batch build project."""

    WINDOWS_CONTAINER = "WINDOWS_CONTAINER"
    LINUX_CONTAINER = "LINUX_CONTAINER"
    LINUX_GPU_CONTAINER = "LINUX_GPU_CONTAINER"
    ARM_CONTAINER = "ARM_CONTAINER"
    WINDOWS_SERVER_2019_CONTAINER = "WINDOWS_SERVER_2019_CONTAINER"
    WINDOWS_SERVER_2022_CONTAINER = "WINDOWS_SERVER_2022_CONTAINER"
    LINUX_LAMBDA_CONTAINER = "LINUX_LAMBDA_CONTAINER"
    ARM_LAMBDA_CONTAINER = "ARM_LAMBDA_CONTAINER"
    LINUX_EC2 = "LINUX_EC2"
    ARM_EC2 = "ARM_EC2"
    WINDOWS_EC2 = "WINDOWS_EC2"
    MAC_ARM = "MAC_ARM"

    __str__ = str.__str__


EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr: TypeAlias = Annotated[
    EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi | str,
    open_enum_validator(EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi),
]
