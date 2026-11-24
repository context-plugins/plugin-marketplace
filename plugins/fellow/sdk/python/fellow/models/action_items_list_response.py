from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .paginated_response_action_item import PaginatedResponseActionItem, PaginatedResponseActionItemDict


class ActionItemsListResponse(SdkBaseModel):
    """Response containing a paginated list of action items."""

    action_items: PaginatedResponseActionItem


class ActionItemsListResponseDict(TypedDict):
    action_items: PaginatedResponseActionItemDict
