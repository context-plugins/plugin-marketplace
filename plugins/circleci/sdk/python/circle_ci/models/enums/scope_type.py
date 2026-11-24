from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScopeType(str, Enum):
    PROJECT = "project"

    __str__ = str.__str__


ScopeTypeOrStr: TypeAlias = Annotated[ScopeType | str, open_enum_validator(ScopeType)]
