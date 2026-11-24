from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_hud_platform_rollouts_api import StatusHudPlatformRolloutsApiOrStr


class CancelResponse(SdkBaseModel):
    """One trace's cancel result.

    Cancellation is two-phase: ``accepted`` means the trace was marked ``cancelling`` and finalization enqueued;
    ``noop`` means nothing transitioned (already terminal, or not found)."""

    status: StatusHudPlatformRolloutsApiOrStr


class CancelResponseDict(TypedDict):
    status: StatusHudPlatformRolloutsApiOrStr
