from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recipient_aggregate import RecipientAggregate, RecipientAggregateDict
from .x_plinth import XPlinth, XPlinthDict


class RecipientsResponse(SdkBaseModel):
    code: int = 200
    message: str
    x_plinth: Optional[XPlinth] = UNSET
    hits: int
    """Total matching rows, not the number returned."""

    page: int
    limit: int
    results_count: int
    """Rows in THIS response."""

    total_pages: int
    results: list[RecipientAggregate]


class RecipientsResponseDict(TypedDict):
    code: NotRequired[int]
    message: str
    x_plinth: NotRequired[XPlinthDict]
    hits: int
    page: int
    limit: int
    results_count: int
    total_pages: int
    results: list[RecipientAggregateDict]
