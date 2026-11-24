from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .action_item import ActionItem, ActionItemDict
from .page_info import PageInfo, PageInfoDict


class PaginatedResponseActionItem(SdkBaseModel):
    page_info: PageInfo
    """Information about a page returned in a paginated response."""

    data: list[ActionItem]


class PaginatedResponseActionItemDict(TypedDict):
    page_info: PageInfoDict
    data: list[ActionItemDict]
