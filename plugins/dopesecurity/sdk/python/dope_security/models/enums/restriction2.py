from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Restriction2(str, Enum):
    """The action applied when the category is matched"""

    ALLOW = "ALLOW"
    BLOCK = "BLOCK"
    WARNING = "WARNING"

    __str__ = str.__str__


Restriction2OrStr: TypeAlias = Annotated[Restriction2 | str, open_enum_validator(Restriction2)]
