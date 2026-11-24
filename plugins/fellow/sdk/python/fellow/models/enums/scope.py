from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scope(str, Enum):
    ASSIGNED_TO_ME = "assigned_to_me"
    ASSIGNED_TO_OTHERS = "assigned_to_others"
    ALL = "all"

    __str__ = str.__str__


ScopeOrStr: TypeAlias = Annotated[Scope | str, open_enum_validator(Scope)]
