from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AsyncTaskCredits(SdkBaseModel):
    """Credit information for an async task."""

    credits_to_charge: float = Field(alias="creditsToCharge")
    """Estimated cost, computed when the task is submitted. Nothing is reserved or deducted then; credits are deducted
    only when the task completes."""

    credits_charged: float | None = Field(alias="creditsCharged")
    """Credits actually charged: null until the task finishes, then the amount billed for ``COMPLETED``, or ``0`` for
    ``FAILED`` (failed tasks are never charged). Equals ``creditsToCharge``, except that AI Mode with
    ``include.expandProducts`` adds +1 credit per product cluster returned."""


class AsyncTaskCreditsDict(TypedDict):
    credits_to_charge: float
    credits_charged: float | None
