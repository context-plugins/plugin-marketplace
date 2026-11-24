from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Goal(SdkBaseModel):
    id: int
    host_id: int
    name: str
    path: Optional[str] = UNSET
    operator: Optional[str] = UNSET
    event_name: Optional[str] = UNSET
    scroll_depth: Optional[int] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    updated_at: Optional[RFC3339DateTime] = UNSET


class GoalDict(TypedDict):
    id: int
    host_id: int
    name: str
    path: NotRequired[str]
    operator: NotRequired[str]
    event_name: NotRequired[str]
    scroll_depth: NotRequired[int]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
