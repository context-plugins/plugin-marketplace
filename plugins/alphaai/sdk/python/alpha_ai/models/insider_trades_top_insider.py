from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class InsiderTradesTopInsider(SdkBaseModel):
    name: str
    title: str
    """Officer title from the filing; empty when the filer reports as a director only."""

    event_count: int
    net_value_usd: OptionalNullable[str] = UNSET
    """Buys minus sells in USD over the last 12 months, as a decimal string; positive means a net buyer."""


class InsiderTradesTopInsiderDict(TypedDict):
    name: str
    title: str
    event_count: int
    net_value_usd: NotRequired[str | None]
