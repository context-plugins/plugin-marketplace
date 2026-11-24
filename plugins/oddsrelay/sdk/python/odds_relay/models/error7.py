from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error7(SdkBaseModel):
    """``insufficient_tokens``: the request's price is above the account's balance. Nothing was served or spent. The
    message names the price, the balance and the reset, and two fixes: add filters, or (plan ``business``) talk to us
    about Enterprise at https://oddsrelay.io/contact, or (a custom plan) talk to us about raising your allowance at
    https://oddsrelay.io/contact, or (every other plan) upgrade. No ``Retry-After``."""

    code: Literal["insufficient_tokens"] = "insufficient_tokens"
    message: str
    request_id: str
    cost: int
    """This request's price in tokens."""

    remaining: int
    """Tokens left until ``resets_at``."""

    resets_at: str
    """ISO-8601 UTC, whole seconds: when the pool resets; on a trial, the trial's end when that comes first."""

    plan: str | None
    rate_card: str
    quote: str
    """How to price a request for free."""

    upgrade_url: Optional[str] = UNSET
    """Where to upgrade. Absent on a custom plan (any plan code but ``free``, ``trial``, ``trial_outreach``,
    ``starter``, ``pro`` and ``business``): it has no self-serve upgrade."""


class Error7Dict(TypedDict):
    code: Literal["insufficient_tokens"]
    message: str
    request_id: str
    cost: int
    remaining: int
    resets_at: str
    plan: str | None
    rate_card: str
    quote: str
    upgrade_url: NotRequired[str]
