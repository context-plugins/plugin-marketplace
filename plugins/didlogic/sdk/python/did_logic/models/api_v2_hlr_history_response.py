from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .log import Log, LogDict
from .pagination_didlogic_com_hlr_lookups_api import (
    PaginationDidlogicComHlrLookupsApi,
    PaginationDidlogicComHlrLookupsApiDict,
)


class ApiV2HlrHistoryResponse(SdkBaseModel):
    logs: list[Log]
    """List of HLR lookup logs"""

    pagination: PaginationDidlogicComHlrLookupsApi
    """Pagination metadata"""


class ApiV2HlrHistoryResponseDict(TypedDict):
    logs: list[LogDict]
    pagination: PaginationDidlogicComHlrLookupsApiDict
