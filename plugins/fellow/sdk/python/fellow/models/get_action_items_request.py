from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .action_item_filters import ActionItemFilters, ActionItemFiltersDict
from .enums.action_item_order_by import ActionItemOrderByOrStr
from .paginated_request_params import PaginatedRequestParams, PaginatedRequestParamsDict


class GetActionItemsRequest(SdkBaseModel):
    """Request body for getting action items with optional filters and pagination."""

    pagination: Optional[PaginatedRequestParams] = UNSET
    include: Optional[Any] = UNSET
    order_by: Optional[ActionItemOrderByOrStr] = UNSET
    """Sort order for action items. Valid values: 'created_at_desc' (default, newest first), 'created_at_asc' (oldest
    first), 'updated_at_desc' (most recently updated first), 'updated_at_asc' (least recently updated first), 'due_date'
    (soonest due date first, items without due dates appear last)"""

    filters: Optional[ActionItemFilters] = UNSET


class GetActionItemsRequestDict(TypedDict):
    pagination: NotRequired[PaginatedRequestParamsDict]
    include: NotRequired[Any]
    order_by: NotRequired[ActionItemOrderByOrStr]
    filters: NotRequired[ActionItemFiltersDict]
