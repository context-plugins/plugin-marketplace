from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    GLOBE = "globe"
    LIVE_USERS = "live-users"
    MAP = "map"
    COUNTRIES = "countries"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
