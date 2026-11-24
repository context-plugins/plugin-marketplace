from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Restriction(str, Enum):
    AUDIT = "audit"
    WARN = "warn"
    BLOCK = "block"

    __str__ = str.__str__


RestrictionOrStr: TypeAlias = Annotated[Restriction | str, open_enum_validator(Restriction)]
