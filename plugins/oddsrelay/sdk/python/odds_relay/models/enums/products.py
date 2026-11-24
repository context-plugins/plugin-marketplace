from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Products(str, Enum):
    OK = "ok"
    SLOW = "slow"
    STALE = "stale"

    __str__ = str.__str__


ProductsOrStr: TypeAlias = Annotated[Products | str, open_enum_validator(Products)]
