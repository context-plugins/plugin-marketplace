from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Restriction4(str, Enum):
    """Custom categories can be ignored, in addition to regular restrictions"""

    ALLOW = "ALLOW"
    BLOCK = "BLOCK"
    WARNING = "WARNING"
    IGNORE = "IGNORE"

    __str__ = str.__str__


Restriction4OrStr: TypeAlias = Annotated[Restriction4 | str, open_enum_validator(Restriction4)]
