from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyListPagination(SdkBaseModel):
    limit: int
    """Page size (capped at 100 for ``GET /companies``; up to 500 for ``GET /companies/export``)."""

    offset: int
    total: int
    """Total rows matching filters. May be ``-1`` when not computed (e.g. some cursor-based responses)."""

    has_more: bool = Field(alias="hasMore")
    cursor: Optional[str] = UNSET
    """Last ``entity_id`` from this page; pass as ``cursor`` query param for the next page when supported."""


class CompanyListPaginationDict(TypedDict):
    limit: int
    offset: int
    total: int
    has_more: bool
    cursor: NotRequired[str]
