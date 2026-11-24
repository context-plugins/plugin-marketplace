from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class HealthResponse(SdkBaseModel):
    status: Optional[str] = UNSET
    api: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class HealthResponseDict(TypedDict):
    status: NotRequired[str]
    api: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
