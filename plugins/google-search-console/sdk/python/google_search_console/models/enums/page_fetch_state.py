from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PageFetchState(str, Enum):
    """Whether or not Google could retrieve the page from your server. Equivalent to `"page fetch"
    <https://support.google.com/webmasters/answer/9012289#index_coverage>`__ in the URL inspection report."""

    PAGE_FETCH_STATE_UNSPECIFIED = "PAGE_FETCH_STATE_UNSPECIFIED"
    SUCCESSFUL = "SUCCESSFUL"
    SOFT_404 = "SOFT_404"
    BLOCKED_ROBOTS_TXT = "BLOCKED_ROBOTS_TXT"
    NOT_FOUND = "NOT_FOUND"
    ACCESS_DENIED = "ACCESS_DENIED"
    SERVER_ERROR = "SERVER_ERROR"
    REDIRECT_ERROR = "REDIRECT_ERROR"
    ACCESS_FORBIDDEN = "ACCESS_FORBIDDEN"
    BLOCKED_4_XX = "BLOCKED_4XX"
    INTERNAL_CRAWL_ERROR = "INTERNAL_CRAWL_ERROR"
    INVALID_URL = "INVALID_URL"

    __str__ = str.__str__


PageFetchStateOrStr: TypeAlias = Annotated[PageFetchState | str, open_enum_validator(PageFetchState)]
