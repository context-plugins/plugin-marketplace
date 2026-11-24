from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MatchMode(str, Enum):
    ANY = "ANY"
    ALL = "ALL"

    __str__ = str.__str__


MatchModeOrStr: TypeAlias = Annotated[MatchMode | str, open_enum_validator(MatchMode)]
