from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SearchType(str, Enum):
    TOP = "TOP"
    LATEST = "LATEST"
    MEDIA = "MEDIA"

    __str__ = str.__str__


SearchTypeOrStr: TypeAlias = Annotated[SearchType | str, open_enum_validator(SearchType)]
