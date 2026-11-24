from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Privacy1(str, Enum):
    CONNECTIONS = "CONNECTIONS"
    PUBLIC = "PUBLIC"
    LOGGED_IN = "LOGGED_IN"
    CONTAINER = "CONTAINER"

    __str__ = str.__str__


Privacy1OrStr: TypeAlias = Annotated[Privacy1 | str, open_enum_validator(Privacy1)]
