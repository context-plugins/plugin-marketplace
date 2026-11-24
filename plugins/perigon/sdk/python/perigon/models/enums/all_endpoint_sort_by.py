from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AllEndpointSortBy(str, Enum):
    RELEVANCE = "relevance"
    DATE = "date"
    REVERSE_DATE = "reverseDate"
    REVERSE_ADD_DATE = "reverseAddDate"
    ADD_DATE = "addDate"
    PUB_DATE = "pubDate"
    REFRESH_DATE = "refreshDate"

    __str__ = str.__str__


AllEndpointSortByOrStr: TypeAlias = Annotated[AllEndpointSortBy | str, open_enum_validator(AllEndpointSortBy)]
