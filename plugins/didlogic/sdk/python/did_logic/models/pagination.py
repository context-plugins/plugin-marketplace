from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Pagination(SdkBaseModel):
    """Pagination metadata for list responses"""

    page: int
    """Current page number (1-based)"""

    per_page: int
    """Number of records per page"""

    total_pages: int
    """Total number of pages available"""

    total_records: int
    """Total number of records"""


class PaginationDict(TypedDict):
    page: int
    per_page: int
    total_pages: int
    total_records: int
