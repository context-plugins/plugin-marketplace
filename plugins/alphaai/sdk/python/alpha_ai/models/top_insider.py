from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class TopInsider(SdkBaseModel):
    name: str
    title: str
    """Officer title from the filing; empty when the filer reports as a director only."""

    transaction_count: int
    net_value: OptionalNullable[str] = UNSET
    """Buys minus sells in USD over the window, as a decimal string."""


class TopInsiderDict(TypedDict):
    name: str
    title: str
    transaction_count: int
    net_value: NotRequired[str | None]
