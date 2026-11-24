from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TaskActivityEvent(SdkBaseModel):
    event: str
    at: str
    by: Optional[UUID] = UNSET
    by_name: Optional[str] = UNSET
    by_avatar_url: Optional[str] = UNSET
    by_role: Optional[str] = UNSET
    key: Optional[str] = UNSET
    done: Optional[bool] = UNSET
    summary: Optional[str] = UNSET
    version: Optional[int] = UNSET


class TaskActivityEventDict(TypedDict):
    event: str
    at: str
    by: NotRequired[UUID]
    by_name: NotRequired[str]
    by_avatar_url: NotRequired[str]
    by_role: NotRequired[str]
    key: NotRequired[str]
    done: NotRequired[bool]
    summary: NotRequired[str]
    version: NotRequired[int]
