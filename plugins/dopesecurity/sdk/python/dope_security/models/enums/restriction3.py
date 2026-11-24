from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Restriction3(str, Enum):
    """Action applied when the category is matched"""

    ALLOW = "ALLOW"
    BLOCK = "BLOCK"
    WARNING = "WARNING"

    __str__ = str.__str__


Restriction3OrStr: TypeAlias = Annotated[Restriction3 | str, open_enum_validator(Restriction3)]
