from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WatchlistSortBy(str, Enum):
    ID = "id"
    CREATED_AT = "createdAt"
    UPDATED_AT = "updatedAt"
    NAME = "name"

    __str__ = str.__str__


WatchlistSortByOrStr: TypeAlias = Annotated[WatchlistSortBy | str, open_enum_validator(WatchlistSortBy)]
