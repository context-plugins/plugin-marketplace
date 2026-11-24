from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ThreatSource(SdkBaseModel):
    source: Optional[str] = UNSET
    indicator: Optional[str] = UNSET
    threat_type: Optional[str] = UNSET
    confidence: Optional[float] = UNSET
    first_seen: Optional[str] = UNSET
    last_seen: Optional[str] = UNSET


class ThreatSourceDict(TypedDict):
    source: NotRequired[str]
    indicator: NotRequired[str]
    threat_type: NotRequired[str]
    confidence: NotRequired[float]
    first_seen: NotRequired[str]
    last_seen: NotRequired[str]
