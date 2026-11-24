from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Restriction5(str, Enum):
    """The action applied for this user or group"""

    ALLOW = "ALLOW"
    BLOCK = "BLOCK"
    WARNING = "WARNING"

    __str__ = str.__str__


Restriction5OrStr: TypeAlias = Annotated[Restriction5 | str, open_enum_validator(Restriction5)]
