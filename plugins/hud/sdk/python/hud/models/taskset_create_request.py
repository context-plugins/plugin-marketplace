from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TasksetCreateRequest(SdkBaseModel):
    name: str
    description: Optional[str] = UNSET
    registry_id: Optional[UUID] = UNSET
    project_id: Optional[UUID] = UNSET


class TasksetCreateRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    registry_id: NotRequired[UUID]
    project_id: NotRequired[UUID]
