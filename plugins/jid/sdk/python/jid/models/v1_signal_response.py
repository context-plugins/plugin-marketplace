from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class V1SignalResponse(SdkBaseModel):
    signal: Optional[str] = UNSET
    expires_at: Optional[RFC3339DateTime] = UNSET
    ttl: Optional[int] = UNSET


class V1SignalResponseDict(TypedDict):
    signal: NotRequired[str]
    expires_at: NotRequired[RFC3339DateTime]
    ttl: NotRequired[int]
