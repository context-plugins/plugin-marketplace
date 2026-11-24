from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PaginationDidlogicComNumbersInventoryApi(SdkBaseModel):
    """Pagination metadata"""

    total: int
    """Total number of items"""

    total_pages: int
    """Total number of pages"""

    current_page: int
    """Current page number"""


class PaginationDidlogicComNumbersInventoryApiDict(TypedDict):
    total: int
    total_pages: int
    current_page: int
