from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .checks import Checks, ChecksDict
from .enums.status1 import Status1OrStr


class DeepHealthResponse(SdkBaseModel):
    status: Optional[Status1OrStr] = UNSET
    product: Optional[str] = UNSET
    version: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET
    checks: Optional[Checks] = UNSET


class DeepHealthResponseDict(TypedDict):
    status: NotRequired[Status1OrStr]
    product: NotRequired[str]
    version: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
    checks: NotRequired[ChecksDict]
