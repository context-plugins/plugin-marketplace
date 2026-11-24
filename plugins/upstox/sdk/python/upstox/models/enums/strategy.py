from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Strategy(str, Enum):
    """Defines the strategy for the GTT order leg: ENTRY - First leg order STOPLOSS - Stop-loss order TARGET - Target
    order"""

    ENTRY = "ENTRY"
    STOPLOSS = "STOPLOSS"
    TARGET = "TARGET"

    __str__ = str.__str__


StrategyOrStr: TypeAlias = Annotated[Strategy | str, open_enum_validator(Strategy)]
