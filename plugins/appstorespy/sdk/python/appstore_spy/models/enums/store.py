from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Store(str, Enum):
    """An enumeration."""

    PLAY = "play"
    IOS = "ios"

    __str__ = str.__str__


StoreOrStr: TypeAlias = Annotated[Store | str, open_enum_validator(Store)]
