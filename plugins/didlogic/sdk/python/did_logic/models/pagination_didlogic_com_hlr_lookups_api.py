from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PaginationDidlogicComHlrLookupsApi(SdkBaseModel):
    """Pagination metadata"""

    total: int
    """Total number of items"""

    total_pages: int
    """Total number of pages"""

    current_page: int
    """Current page number"""

    per_page: int
    """Items per page"""


class PaginationDidlogicComHlrLookupsApiDict(TypedDict):
    total: int
    total_pages: int
    current_page: int
    per_page: int
