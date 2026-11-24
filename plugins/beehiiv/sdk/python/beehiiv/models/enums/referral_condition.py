from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReferralCondition(str, Enum):
    EQ = "eq"
    GT = "gt"
    LT = "lt"

    __str__ = str.__str__


ReferralConditionOrStr: TypeAlias = Annotated[ReferralCondition | str, open_enum_validator(ReferralCondition)]
