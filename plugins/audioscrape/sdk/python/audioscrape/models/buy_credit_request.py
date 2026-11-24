from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class BuyCreditRequest(SdkBaseModel):
    amount_cents: OptionalNullable[int] = UNSET
    """Balance to buy in US cents, 500–10,000 (default 500)."""


class BuyCreditRequestDict(TypedDict):
    amount_cents: NotRequired[int | None]
