from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortBy(str, Enum):
    """Sort order"""

    RECENT = "recent"
    PRICE_DESC = "price_desc"
    PRICE_ASC = "price_asc"

    __str__ = str.__str__


SortByOrStr: TypeAlias = Annotated[SortBy | str, open_enum_validator(SortBy)]
