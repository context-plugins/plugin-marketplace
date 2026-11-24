from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .reputation_indicators import ReputationIndicators, ReputationIndicatorsDict
from .reputation_signals import ReputationSignals, ReputationSignalsDict


class TrustSignals(SdkBaseModel):
    trust_score: Optional[int] = UNSET
    trust_band: Optional[str] = UNSET
    signals: Optional[ReputationSignals] = UNSET
    indicators: Optional[ReputationIndicators] = UNSET


class TrustSignalsDict(TypedDict):
    trust_score: NotRequired[int]
    trust_band: NotRequired[str]
    signals: NotRequired[ReputationSignalsDict]
    indicators: NotRequired[ReputationIndicatorsDict]
