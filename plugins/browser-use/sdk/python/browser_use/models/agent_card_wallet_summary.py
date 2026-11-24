from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AgentCardWalletSummary(SdkBaseModel):
    """A spendable project wallet as the composer needs to show it."""

    id: UUID
    name: str
    currency: str
    available_cents: int = Field(alias="availableCents")
    active_hold_cents: int = Field(alias="activeHoldCents")


class AgentCardWalletSummaryDict(TypedDict):
    id: UUID
    name: str
    currency: str
    available_cents: int
    active_hold_cents: int
