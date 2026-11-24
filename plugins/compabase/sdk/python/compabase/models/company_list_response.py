from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .company_list_item import CompanyListItem, CompanyListItemDict
from .company_list_pagination import CompanyListPagination, CompanyListPaginationDict


class CompanyListResponse(SdkBaseModel):
    """Search/list response. ``data`` is an array of companies."""

    data: list[CompanyListItem]
    """One page of result rows (same filters as the request); length ≤ ``pagination.limit``."""

    pagination: CompanyListPagination


class CompanyListResponseDict(TypedDict):
    data: list[CompanyListItemDict]
    pagination: CompanyListPaginationDict
