from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination import Pagination, PaginationDict
from .plan1 import Plan1, Plan1Dict


class PlanListResponse(SdkBaseModel):
    data: list[Plan1]
    pagination: Pagination


class PlanListResponseDict(TypedDict):
    data: list[Plan1Dict]
    pagination: PaginationDict
