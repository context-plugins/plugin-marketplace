from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .task_comment_item import TaskCommentItem, TaskCommentItemDict


class TaskCommentsListResponse(SdkBaseModel):
    comments: list[TaskCommentItem]
    can_comment: bool
    reason: Optional[str] = UNSET


class TaskCommentsListResponseDict(TypedDict):
    comments: list[TaskCommentItemDict]
    can_comment: bool
    reason: NotRequired[str]
