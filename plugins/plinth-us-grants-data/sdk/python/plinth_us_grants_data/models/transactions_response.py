from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .grant_transaction import GrantTransaction, GrantTransactionDict
from .x_plinth import XPlinth, XPlinthDict


class TransactionsResponse(SdkBaseModel):
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
    results: list[GrantTransaction]


class TransactionsResponseDict(TypedDict):
    code: NotRequired[int]
    message: str
    x_plinth: NotRequired[XPlinthDict]
    hits: int
    page: int
    limit: int
    results_count: int
    total_pages: int
    results: list[GrantTransactionDict]
