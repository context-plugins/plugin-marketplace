from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ComputeType(str, Enum):
    """Information about the compute resources the docker server uses. Available values include: BUILD_GENERAL1_SMALL:
    Use up to 4 GiB memory and 2 vCPUs for your docker server. BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs
    for your docker server. BUILD_GENERAL1_LARGE: Use up to 16 GiB memory and 8 vCPUs for your docker server.
    BUILD_GENERAL1_XLARGE: Use up to 64 GiB memory and 32 vCPUs for your docker server. BUILD_GENERAL1_2XLARGE: Use up
    to 128 GiB memory and 64 vCPUs for your docker server."""

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


ComputeTypeOrStr: TypeAlias = Annotated[ComputeType | str, open_enum_validator(ComputeType)]
