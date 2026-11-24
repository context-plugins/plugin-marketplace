from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.identity_scope import IdentityScope, IdentityScopeOrStr
from .enums.max_age_seconds import MaxAgeSeconds, MaxAgeSecondsOrInt
from .enums.reason_alph_ai_rest_radar_api import ReasonAlphAiRestRadarApiOrStr
from .enums.status1 import Status1, Status1OrStr


class RadarContextSummary(SdkBaseModel):
    """Context availability and timing for the selected snapshot, without ticker data."""

    status: Status1OrStr = Status1.UNAVAILABLE
    reason: Optional[ReasonAlphAiRestRadarApiOrStr] = UNSET
    as_of: Optional[RFC3339DateTime] = UNSET
    generated_at: Optional[RFC3339DateTime] = UNSET
    age_seconds: Optional[int] = UNSET
    max_age_seconds: MaxAgeSecondsOrInt = MaxAgeSeconds.VALUE_300
    filings_lookback_days: Optional[int] = UNSET
    cluster_lookback_days: Optional[int] = UNSET
    identity_scope: IdentityScopeOrStr = IdentityScope.ISSUER_CIK
    point_in_time: bool = False


class RadarContextSummaryDict(TypedDict):
    status: NotRequired[Status1OrStr]
    reason: NotRequired[ReasonAlphAiRestRadarApiOrStr]
    as_of: NotRequired[RFC3339DateTime]
    generated_at: NotRequired[RFC3339DateTime]
    age_seconds: NotRequired[int]
    max_age_seconds: NotRequired[MaxAgeSecondsOrInt]
    filings_lookback_days: NotRequired[int]
    cluster_lookback_days: NotRequired[int]
    identity_scope: NotRequired[IdentityScopeOrStr]
    point_in_time: NotRequired[bool]
