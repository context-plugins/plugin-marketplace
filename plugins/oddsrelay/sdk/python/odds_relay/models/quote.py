from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.remaining import Remaining, RemainingDict


class Quote(SdkBaseModel):
    """``quote=true``: this request's price. Free."""

    cost: int
    remaining: Remaining | None
    """Tokens left, ``unlimited``, or null when unknown."""

    rate_card: str


class QuoteDict(TypedDict):
    cost: int
    remaining: RemainingDict | None
    rate_card: str
