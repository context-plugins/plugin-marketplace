from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination import Pagination, PaginationDict
from .unions.call import Call, CallDict


class CdrListResponse(SdkBaseModel):
    """Paginated list of CDR records"""

    calls: list[Call]
    """Array of call detail records"""

    pagination: Pagination
    """Pagination metadata for list responses"""


class CdrListResponseDict(TypedDict):
    calls: list[CallDict]
    pagination: PaginationDict
