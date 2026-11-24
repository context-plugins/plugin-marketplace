from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.state import StateOrStr
from .job import Job, JobDict
from .user import User, UserDict


class Build(SdkBaseModel):
    id: Optional[UUID] = UNSET
    number: Optional[int] = UNSET
    state: Optional[StateOrStr] = UNSET
    branch: Optional[str] = UNSET
    commit: Optional[str] = UNSET
    message: Optional[str] = UNSET
    url: Optional[str] = UNSET
    web_url: Optional[str] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    scheduled_at: Optional[RFC3339DateTime] = UNSET
    started_at: OptionalNullable[RFC3339DateTime] = UNSET
    finished_at: OptionalNullable[RFC3339DateTime] = UNSET
    creator: Optional[User] = UNSET
    jobs: Optional[list[Job]] = UNSET


class BuildDict(TypedDict):
    id: NotRequired[UUID]
    number: NotRequired[int]
    state: NotRequired[StateOrStr]
    branch: NotRequired[str]
    commit: NotRequired[str]
    message: NotRequired[str]
    url: NotRequired[str]
    web_url: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    scheduled_at: NotRequired[RFC3339DateTime]
    started_at: NotRequired[RFC3339DateTime | None]
    finished_at: NotRequired[RFC3339DateTime | None]
    creator: NotRequired[UserDict]
    jobs: NotRequired[list[JobDict]]
