from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automation import Automation, AutomationDict


class AutomationsListResponse(SdkBaseModel):
    data: Optional[list[Automation]] = UNSET
    limit: Optional[int] = UNSET
    """The limit placed on the results. If no limit was specified in the request,this defaults to 10."""

    page: int = 1
    """The page number the results are from. If no page was specified in the request, this defaults to page 1."""

    total_results: Optional[int] = UNSET
    """The total number of results from all pages."""

    total_pages: Optional[int] = UNSET
    """The total number of pages."""


class AutomationsListResponseDict(TypedDict):
    data: NotRequired[list[AutomationDict]]
    limit: NotRequired[int]
    page: NotRequired[int]
    total_results: NotRequired[int]
    total_pages: NotRequired[int]
