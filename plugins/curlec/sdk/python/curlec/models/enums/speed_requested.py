from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpeedRequested(str, Enum):
    """normal: 5-7 business days. optimum: instant if available, falls back to normal."""

    NORMAL = "normal"
    OPTIMUM = "optimum"

    __str__ = str.__str__


SpeedRequestedOrStr: TypeAlias = Annotated[SpeedRequested | str, open_enum_validator(SpeedRequested)]
