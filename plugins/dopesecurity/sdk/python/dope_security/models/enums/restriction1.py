from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Restriction1(str, Enum):
    """The action applied for this entity"""

    ALLOW = "ALLOW"
    BLOCK = "BLOCK"
    WARNING = "WARNING"

    __str__ = str.__str__


Restriction1OrStr: TypeAlias = Annotated[Restriction1 | str, open_enum_validator(Restriction1)]
