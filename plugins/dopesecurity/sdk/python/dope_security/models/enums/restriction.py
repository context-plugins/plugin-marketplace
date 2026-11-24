from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Restriction(str, Enum):
    """The action applied when the custom category is matched"""

    ALLOW = "ALLOW"
    BLOCK = "BLOCK"
    WARNING = "WARNING"
    IGNORE = "IGNORE"

    __str__ = str.__str__


RestrictionOrStr: TypeAlias = Annotated[Restriction | str, open_enum_validator(Restriction)]
