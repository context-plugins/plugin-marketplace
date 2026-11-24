from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class Health(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    service: Optional[str] = UNSET
    version: Optional[str] = UNSET
    time: Optional[RFC3339DateTime] = UNSET


class HealthDict(TypedDict):
    status: NotRequired[StatusOrStr]
    service: NotRequired[str]
    version: NotRequired[str]
    time: NotRequired[RFC3339DateTime]
