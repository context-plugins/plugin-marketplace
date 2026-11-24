from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dids1 import Dids1, Dids1Dict
from .pagination_didlogic_com_numbers_inventory_api import (
    PaginationDidlogicComNumbersInventoryApi,
    PaginationDidlogicComNumbersInventoryApiDict,
)


class Dids(SdkBaseModel):
    """Paginated list of available DID numbers"""

    pagination: PaginationDidlogicComNumbersInventoryApi
    """Pagination metadata"""

    dids: list[Dids1]
    """Array of available DID numbers"""


class DidsDict(TypedDict):
    pagination: PaginationDidlogicComNumbersInventoryApiDict
    dids: list[Dids1Dict]
