from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dids3 import Dids3, Dids3Dict
from .pagination_didlogic_com_numbers_inventory_api import (
    PaginationDidlogicComNumbersInventoryApi,
    PaginationDidlogicComNumbersInventoryApiDict,
)


class Dids2(SdkBaseModel):
    """Paginated search results"""

    pagination: PaginationDidlogicComNumbersInventoryApi
    """Pagination metadata"""

    dids: list[Dids3]
    """Array of available DID numbers"""


class Dids2Dict(TypedDict):
    pagination: PaginationDidlogicComNumbersInventoryApiDict
    dids: list[Dids3Dict]
