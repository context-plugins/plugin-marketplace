from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi(str, Enum):
    """The type of build environment to use for related builds. If you're using compute fleets during project creation,
    type will be ignored. For more information, see Build environment compute types in the CodeBuild user guide."""

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


Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr: TypeAlias = Annotated[
    Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi | str,
    open_enum_validator(Type3AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi),
]
