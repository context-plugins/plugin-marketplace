from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Pattern1(str, Enum):
    OPEN_MARKET = "open_market"
    PLAN_OR_OFFERING = "plan_or_offering"
    HOLDERS_ONLY = "holders_only"
    ALL = "all"

    __str__ = str.__str__


Pattern1OrStr: TypeAlias = Annotated[Pattern1 | str, open_enum_validator(Pattern1)]
