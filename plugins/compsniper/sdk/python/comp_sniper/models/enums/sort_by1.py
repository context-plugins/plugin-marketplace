from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy1(str, Enum):
    """Sort order"""

    DEFAULT = "default"
    NEWEST = "newest"
    PRICE_ASC = "price_asc"
    PRICE_DESC = "price_desc"

    __str__ = str.__str__


SortBy1OrStr: TypeAlias = Annotated[SortBy1 | str, open_enum_validator(SortBy1)]
