from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Build(SdkBaseModel):
    hashed_id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    duration: Optional[int] = UNSET
    status: Optional[str] = UNSET
    tags: Optional[list[str]] = UNSET
    group_id: Optional[int] = UNSET
    user_id: Optional[int] = UNSET
    automation_project_id: Optional[int] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    updated_at: Optional[RFC3339DateTime] = UNSET


class BuildDict(TypedDict):
    hashed_id: NotRequired[str]
    name: NotRequired[str]
    duration: NotRequired[int]
    status: NotRequired[str]
    tags: NotRequired[list[str]]
    group_id: NotRequired[int]
    user_id: NotRequired[int]
    automation_project_id: NotRequired[int]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
