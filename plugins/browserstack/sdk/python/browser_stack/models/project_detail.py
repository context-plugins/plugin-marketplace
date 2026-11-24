from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .build import Build, BuildDict


class ProjectDetail(SdkBaseModel):
    id: Optional[int] = UNSET
    name: Optional[str] = UNSET
    group_id: Optional[int] = UNSET
    user_id: Optional[int] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    updated_at: Optional[RFC3339DateTime] = UNSET
    sub_group_id: OptionalNullable[int] = UNSET
    builds: Optional[list[Build]] = UNSET


class ProjectDetailDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    group_id: NotRequired[int]
    user_id: NotRequired[int]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    sub_group_id: NotRequired[int | None]
    builds: NotRequired[list[BuildDict]]
