from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status2 import Status2OrStr


class HealthResponse(SdkBaseModel):
    status: Optional[Status2OrStr] = UNSET
    product: Optional[str] = UNSET
    version: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class HealthResponseDict(TypedDict):
    status: NotRequired[Status2OrStr]
    product: NotRequired[str]
    version: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
