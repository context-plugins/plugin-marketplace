from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .log_didlogic_com_risk_checks_api import LogDidlogicComRiskChecksApi, LogDidlogicComRiskChecksApiDict
from .pagination_didlogic_com_hlr_lookups_api import (
    PaginationDidlogicComHlrLookupsApi,
    PaginationDidlogicComHlrLookupsApiDict,
)


class ApiV2NumbersRiskChecksLogsResponse(SdkBaseModel):
    logs: list[LogDidlogicComRiskChecksApi]
    """List of risk check logs"""

    pagination: PaginationDidlogicComHlrLookupsApi
    """Pagination metadata"""


class ApiV2NumbersRiskChecksLogsResponseDict(TypedDict):
    logs: list[LogDidlogicComRiskChecksApiDict]
    pagination: PaginationDidlogicComHlrLookupsApiDict
