from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConfidentialInstanceType(str, Enum):
    """Optional. Defines the type of Confidential Compute technology to use."""

    CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED = "CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED"
    SEV = "SEV"
    SEV_SNP = "SEV_SNP"
    TDX = "TDX"

    __str__ = str.__str__


ConfidentialInstanceTypeOrStr: TypeAlias = Annotated[
    ConfidentialInstanceType | str, open_enum_validator(ConfidentialInstanceType)
]
