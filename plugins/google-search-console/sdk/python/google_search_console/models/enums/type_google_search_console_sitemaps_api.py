from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeGoogleSearchConsoleSitemapsApi(str, Enum):
    """The type of the sitemap. For example: ``rssFeed``."""

    NOT_SITEMAP = "NOT_SITEMAP"
    URL_LIST = "URL_LIST"
    SITEMAP = "SITEMAP"
    RSS_FEED = "RSS_FEED"
    ATOM_FEED = "ATOM_FEED"
    PATTERN_SITEMAP = "PATTERN_SITEMAP"
    OCEANFRONT = "OCEANFRONT"

    __str__ = str.__str__


TypeGoogleSearchConsoleSitemapsApiOrStr: TypeAlias = Annotated[
    TypeGoogleSearchConsoleSitemapsApi | str, open_enum_validator(TypeGoogleSearchConsoleSitemapsApi)
]
