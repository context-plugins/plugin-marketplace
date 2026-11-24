from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .base_summary import BaseSummary, BaseSummaryDict


class BaseList(SdkBaseModel):
    """A paginated list of bases accessible to the authenticated user."""

    bases: list[BaseSummary]
    offset: Optional[str] = UNSET
    """Pagination cursor for the next page of results."""


class BaseListDict(TypedDict):
    bases: list[BaseSummaryDict]
    offset: NotRequired[str]
