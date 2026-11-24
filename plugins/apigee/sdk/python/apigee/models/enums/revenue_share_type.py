from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RevenueShareType(str, Enum):
    """Method used to calculate the revenue that is shared with developers."""

    REVENUE_SHARE_TYPE_UNSPECIFIED = "REVENUE_SHARE_TYPE_UNSPECIFIED"
    FIXED = "FIXED"
    VOLUME_BANDED = "VOLUME_BANDED"

    __str__ = str.__str__


RevenueShareTypeOrStr: TypeAlias = Annotated[RevenueShareType | str, open_enum_validator(RevenueShareType)]
