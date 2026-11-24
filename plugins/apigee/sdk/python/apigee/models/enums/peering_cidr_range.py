from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PeeringCidrRange(str, Enum):
    """Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support
    ``SLASH_16`` to ``SLASH_20`` and defaults to ``SLASH_16``. Evaluation organizations support only ``SLASH_23``."""

    CIDR_RANGE_UNSPECIFIED = "CIDR_RANGE_UNSPECIFIED"
    SLASH_16 = "SLASH_16"
    SLASH_17 = "SLASH_17"
    SLASH_18 = "SLASH_18"
    SLASH_19 = "SLASH_19"
    SLASH_20 = "SLASH_20"
    SLASH_22 = "SLASH_22"
    SLASH_23 = "SLASH_23"

    __str__ = str.__str__


PeeringCidrRangeOrStr: TypeAlias = Annotated[PeeringCidrRange | str, open_enum_validator(PeeringCidrRange)]
