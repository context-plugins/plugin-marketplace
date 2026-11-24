from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RuleCompileStatus(int, Enum):
    """1 = Pending 3 = Execute 5 = Success 7 = Error 9 = WHTWarning 11 = NoMoreCompile 13 = Ignore"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11
    VALUE_13 = 13

    __str__ = str.__str__


RuleCompileStatusOrInt: TypeAlias = Annotated[RuleCompileStatus | int, open_enum_validator(RuleCompileStatus)]
