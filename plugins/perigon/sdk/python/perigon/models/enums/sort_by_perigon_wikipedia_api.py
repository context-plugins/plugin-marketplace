from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByPerigonWikipediaApi(str, Enum):
    RELEVANCE = "relevance"
    REVISION_TS_DESC = "revisionTsDesc"
    REVISION_TS_ASC = "revisionTsAsc"
    PAGE_VIEWS_DESC = "pageViewsDesc"
    PAGE_VIEWS_ASC = "pageViewsAsc"
    SCRAPED_AT_DESC = "scrapedAtDesc"
    SCRAPED_AT_ASC = "scrapedAtAsc"

    __str__ = str.__str__


SortByPerigonWikipediaApiOrStr: TypeAlias = Annotated[
    SortByPerigonWikipediaApi | str, open_enum_validator(SortByPerigonWikipediaApi)
]
