from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Credits(SdkBaseModel):
    balance: int
    """Raw credit balance (latest ledger balance_after; may include not-yet-materialized expired credits)."""

    available: int
    """Spendable credits now = raw balance minus expired-unconsumed credits and active reservations. This is the number
    the admission gate uses."""

    held: int
    """Credits currently reserved by accepted work that has not settled or released yet."""

    expiring_soon: int = Field(alias="expiringSoon")
    """Credits expiring within the next 7 days."""


class CreditsDict(TypedDict):
    balance: int
    available: int
    held: int
    expiring_soon: int
