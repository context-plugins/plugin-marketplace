from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dispute_no_history import DisputeNoHistory, DisputeNoHistoryDict


class DisputesChallenge(SdkBaseModel):
    disputes: Optional[list[DisputeNoHistory]] = UNSET


class DisputesChallengeDict(TypedDict):
    disputes: NotRequired[list[DisputeNoHistoryDict]]
