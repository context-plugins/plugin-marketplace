from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination_didlogic_com_hlr_lookups_api import (
    PaginationDidlogicComHlrLookupsApi,
    PaginationDidlogicComHlrLookupsApiDict,
)
from .task import Task, TaskDict


class ApiV2NumbersRiskChecksResponse(SdkBaseModel):
    tasks: list[Task]
    """List of risk check tasks"""

    pagination: PaginationDidlogicComHlrLookupsApi
    """Pagination metadata"""


class ApiV2NumbersRiskChecksResponseDict(TypedDict):
    tasks: list[TaskDict]
    pagination: PaginationDidlogicComHlrLookupsApiDict
