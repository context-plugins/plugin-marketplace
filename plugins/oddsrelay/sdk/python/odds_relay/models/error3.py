from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr
from .enums.type import TypeOrStr


class Error3(SdkBaseModel):
    code: Literal["internal_error"] = "internal_error"
    """Stable machine code; branch on this, never on ``message``."""

    message: str
    """Human text; may change."""

    request_id: str
    """``or_req_`` + 32 hex, as ``X-OddsRelay-Request-Id``."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Scope 403s only: which axis refused (``not_in_key_scope`` and ``product_not_in_region`` product;
    ``region_not_in_scope`` and ``bookmaker_not_in_region`` region; ``schema_not_in_scope`` schema)."""

    valid: Optional[list[str]] = UNSET
    """``unknown_sport`` (sport key bases), ``unknown_bookmaker``, ``unknown_exchange``, ``bookmaker_not_in_plan`` (your
    plan's bookmakers, or your account scope's, in the call's region), ``sport_not_in_plan``, ``market_not_in_plan`` and
    ``exchange_not_in_plan`` (the scope's list for that product): the values accepted, sorted. ``unknown_market``: the
    market keys this product carries, sorted (keyless ``/v2/coverage``'s ``markets``); a key another product carries may
    also be accepted on this route, and matches nothing here."""

    products: Optional[list[str]] = UNSET
    """``unknown_market`` only, when another product carries the market: those products, sorted, as the ``{type}`` of
    ``/v2/odds/{type}`` (or ``raw``). Left out when no product carries it."""

    reason: Optional[ReasonOrStr] = UNSET
    """``account_suspended`` only."""

    dashboard_url: Optional[str] = UNSET
    """``account_suspended`` only."""


class Error3Dict(TypedDict):
    code: Literal["internal_error"]
    message: str
    request_id: str
    type_: NotRequired[TypeOrStr]
    valid: NotRequired[list[str]]
    products: NotRequired[list[str]]
    reason: NotRequired[ReasonOrStr]
    dashboard_url: NotRequired[str]
