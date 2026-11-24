from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .group_summary import GroupSummary, GroupSummaryDict


class GetGroupsResult(SdkBaseModel):
    groups: Optional[list[GroupSummary]] = Field(default=UNSET, alias="Groups")
    """The collection of all active groups."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class GetGroupsResultDict(TypedDict):
    groups: NotRequired[list[GroupSummaryDict]]
    next_token: NotRequired[str]
