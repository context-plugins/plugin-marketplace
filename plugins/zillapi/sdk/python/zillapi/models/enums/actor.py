from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Actor(str, Enum):
    DETAIL = "detail"
    SEARCH = "search"

    __str__ = str.__str__


ActorOrStr: TypeAlias = Annotated[Actor | str, open_enum_validator(Actor)]
