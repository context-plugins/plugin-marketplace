from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Strategy1(str, Enum):
    """Stop strategy. SoftStop waits for the current activity to complete before stopping; Kill immediately terminates
    the robot process."""

    SOFT_STOP = "SoftStop"
    KILL = "Kill"

    __str__ = str.__str__


Strategy1OrStr: TypeAlias = Annotated[Strategy1 | str, open_enum_validator(Strategy1)]
