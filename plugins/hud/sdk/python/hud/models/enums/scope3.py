from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scope3(str, Enum):
    ALL = "all"
    MEMBER = "member"
    TEAM = "team"

    __str__ = str.__str__


Scope3OrStr: TypeAlias = Annotated[Scope3 | str, open_enum_validator(Scope3)]
