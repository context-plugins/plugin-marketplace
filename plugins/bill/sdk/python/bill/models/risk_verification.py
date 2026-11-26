from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RiskVerification(SdkBaseModel):
    decision: Optional[str] = UNSET


class RiskVerificationDict(TypedDict):
    decision: NotRequired[str]
