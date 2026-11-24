from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ComputeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(str, Enum):
    """The name of a compute type for this batch build that overrides the one specified in the batch build project."""

    BUILD_GENERAL1_SMALL = "BUILD_GENERAL1_SMALL"
    BUILD_GENERAL1_MEDIUM = "BUILD_GENERAL1_MEDIUM"
    BUILD_GENERAL1_LARGE = "BUILD_GENERAL1_LARGE"
    BUILD_GENERAL1_XLARGE = "BUILD_GENERAL1_XLARGE"
    BUILD_GENERAL1_2_XLARGE = "BUILD_GENERAL1_2XLARGE"
    BUILD_LAMBDA_1_GB = "BUILD_LAMBDA_1GB"
    BUILD_LAMBDA_2_GB = "BUILD_LAMBDA_2GB"
    BUILD_LAMBDA_4_GB = "BUILD_LAMBDA_4GB"
    BUILD_LAMBDA_8_GB = "BUILD_LAMBDA_8GB"
    BUILD_LAMBDA_10_GB = "BUILD_LAMBDA_10GB"
    ATTRIBUTE_BASED_COMPUTE = "ATTRIBUTE_BASED_COMPUTE"
    CUSTOM_INSTANCE_TYPE = "CUSTOM_INSTANCE_TYPE"

    __str__ = str.__str__


ComputeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr: TypeAlias = Annotated[
    ComputeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi | str,
    open_enum_validator(ComputeTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi),
]
