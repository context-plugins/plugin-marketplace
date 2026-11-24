from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ComputeTypeAwsCodeBuildFleetApi(str, Enum):
    """Information about the compute resources the compute fleet uses. Available values include:
    ATTRIBUTE_BASED_COMPUTE: Specify the amount of vCPUs, memory, disk space, and the type of machine. If you use
    ATTRIBUTE_BASED_COMPUTE, you must define your attributes by using computeConfiguration. CodeBuild will select the
    cheapest instance that satisfies your specified attributes. For more information, see Reserved capacity environment
    types in the CodeBuild User Guide. CUSTOM_INSTANCE_TYPE: Specify the instance type for your compute fleet. For a
    list of supported instance types, see Supported instance"""

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


ComputeTypeAwsCodeBuildFleetApiOrStr: TypeAlias = Annotated[
    ComputeTypeAwsCodeBuildFleetApi | str, open_enum_validator(ComputeTypeAwsCodeBuildFleetApi)
]
