from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.actor import ActorOrStr


class UsageRow(SdkBaseModel):
    id: Optional[int] = UNSET
    endpoint: Optional[str] = UNSET
    actor: Optional[ActorOrStr] = UNSET
    units: Optional[int] = UNSET
    status_code: Optional[int] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET


class UsageRowDict(TypedDict):
    id: NotRequired[int]
    endpoint: NotRequired[str]
    actor: NotRequired[ActorOrStr]
    units: NotRequired[int]
    status_code: NotRequired[int]
    created_at: NotRequired[RFC3339DateTime]
