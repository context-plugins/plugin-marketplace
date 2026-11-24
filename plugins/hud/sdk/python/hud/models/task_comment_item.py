from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class TaskCommentItem(SdkBaseModel):
    id: UUID
    task_id: UUID
    parent_id: Optional[UUID] = UNSET
    user_id: UUID
    message: str
    created_at: RFC3339DateTime
    updated_at: Optional[RFC3339DateTime] = UNSET
    user_name: Optional[str] = UNSET
    avatar_url: Optional[str] = UNSET


class TaskCommentItemDict(TypedDict):
    id: UUID
    task_id: UUID
    parent_id: NotRequired[UUID]
    user_id: UUID
    message: str
    created_at: RFC3339DateTime
    updated_at: NotRequired[RFC3339DateTime]
    user_name: NotRequired[str]
    avatar_url: NotRequired[str]
