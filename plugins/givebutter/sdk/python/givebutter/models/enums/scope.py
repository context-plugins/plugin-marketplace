from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scope(str, Enum):
    REGISTRANT = "registrant"
    EVENT = "event"

    __str__ = str.__str__


ScopeOrStr: TypeAlias = Annotated[Scope | str, open_enum_validator(Scope)]
