from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RiskVerificationPayloadV1(SdkBaseModel):
    """Payload for Risk Verification."""

    decision: Optional[str] = UNSET


class RiskVerificationPayloadV1Dict(TypedDict):
    decision: NotRequired[str]
