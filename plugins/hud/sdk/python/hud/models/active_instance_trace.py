from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ActiveInstanceTrace(SdkBaseModel):
    id: UUID
    status: Optional[str] = UNSET
    reward: Optional[float] = UNSET
    created_at: RFC3339DateTime
    thumbnail_url: Optional[str] = UNSET
    error: Optional[str] = UNSET


class ActiveInstanceTraceDict(TypedDict):
    id: UUID
    status: NotRequired[str]
    reward: NotRequired[float]
    created_at: RFC3339DateTime
    thumbnail_url: NotRequired[str]
    error: NotRequired[str]
