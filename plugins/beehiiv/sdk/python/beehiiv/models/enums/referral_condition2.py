from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReferralCondition2(str, Enum):
    """The condition required to show the block to subscribers."""

    EQ = "eq"
    GT = "gt"
    LT = "lt"

    __str__ = str.__str__


ReferralCondition2OrStr: TypeAlias = Annotated[ReferralCondition2 | str, open_enum_validator(ReferralCondition2)]
