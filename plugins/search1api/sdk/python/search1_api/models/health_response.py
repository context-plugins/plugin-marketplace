from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class HealthResponse(SdkBaseModel):
    status: str
    timestamp: Optional[RFC3339DateTime] = UNSET
    version: Optional[str] = UNSET


class HealthResponseDict(TypedDict):
    status: str
    timestamp: NotRequired[RFC3339DateTime]
    version: NotRequired[str]
