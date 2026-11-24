from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CacheTime(str, Enum):
    """An enumeration."""

    _1D = "1d"
    _7D = "7d"
    _30D = "30d"

    __str__ = str.__str__


CacheTimeOrStr: TypeAlias = Annotated[CacheTime | str, open_enum_validator(CacheTime)]
