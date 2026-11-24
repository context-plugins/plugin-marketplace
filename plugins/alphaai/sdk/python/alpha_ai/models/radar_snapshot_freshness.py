from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.mode_alph_ai_rest_radar_api import ModeAlphAiRestRadarApi, ModeAlphAiRestRadarApiOrStr


class RadarSnapshotFreshness(SdkBaseModel):
    mode: ModeAlphAiRestRadarApiOrStr = ModeAlphAiRestRadarApi.HISTORICAL_PREVIEW
    effective_delay_seconds: int
    generated_at: Optional[RFC3339DateTime] = UNSET
    source_watermark: Optional[RFC3339DateTime] = UNSET
    source_checked_at: Optional[RFC3339DateTime] = UNSET
    unavailable_reason: Optional[str] = UNSET


class RadarSnapshotFreshnessDict(TypedDict):
    mode: NotRequired[ModeAlphAiRestRadarApiOrStr]
    effective_delay_seconds: int
    generated_at: NotRequired[RFC3339DateTime]
    source_watermark: NotRequired[RFC3339DateTime]
    source_checked_at: NotRequired[RFC3339DateTime]
    unavailable_reason: NotRequired[str]
