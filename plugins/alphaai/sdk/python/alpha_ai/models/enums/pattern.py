from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Pattern(str, Enum):
    OPEN_MARKET = "open_market"
    PLAN_OR_OFFERING = "plan_or_offering"
    HOLDERS_ONLY = "holders_only"

    __str__ = str.__str__


PatternOrStr: TypeAlias = Annotated[Pattern | str, open_enum_validator(Pattern)]
