from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type112(str, Enum):
    FACEBOOK_PERSISTENT_MENU = "FACEBOOK_PERSISTENT_MENU"
    INSTAGRAM_ICE_BREAKERS = "INSTAGRAM_ICE_BREAKERS"

    __str__ = str.__str__


Type112OrStr: TypeAlias = Annotated[Type112 | str, open_enum_validator(Type112)]
