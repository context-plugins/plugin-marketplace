from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IsGs1(str, Enum):
    ON = "on"
    OFF = "off"
    BOTH = "both"

    __str__ = str.__str__


IsGs1OrStr: TypeAlias = Annotated[IsGs1 | str, open_enum_validator(IsGs1)]
