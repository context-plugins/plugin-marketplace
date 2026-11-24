from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpendInterval(str, Enum):
    WEEK = "week"
    MONTH = "month"

    __str__ = str.__str__


SpendIntervalOrStr: TypeAlias = Annotated[SpendInterval | str, open_enum_validator(SpendInterval)]
