from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SearchService1(str, Enum):
    GOOGLE = "google"
    BING = "bing"
    DUCKDUCKGO = "duckduckgo"
    YAHOO = "yahoo"
    HACKERNEWS = "hackernews"
    REUTERS = "reuters"

    __str__ = str.__str__


SearchService1OrStr: TypeAlias = Annotated[SearchService1 | str, open_enum_validator(SearchService1)]
