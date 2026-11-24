from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .action_item_assignee import ActionItemAssignee, ActionItemAssigneeDict
from .enums.action_item_status import ActionItemStatusOrStr
from .enums.completion_type import CompletionTypeOrStr


class ActionItem(SdkBaseModel):
    """API model for action items. Action items are stored as NoteBlock objects with type='todo'."""

    id: Optional[str] = UNSET
    text: Optional[str] = UNSET
    status: Optional[ActionItemStatusOrStr] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    updated_at: Optional[RFC3339DateTime] = UNSET
    due_date: OptionalNullable[str] = UNSET
    note_id: OptionalNullable[str] = UNSET
    assignees: Optional[list[ActionItemAssignee]] = UNSET
    completion_type: Optional[CompletionTypeOrStr] = UNSET
    ai_detected: Optional[bool] = UNSET
    recording_offset: OptionalNullable[float] = UNSET
    ai_suggestion_accepted_by_user: Optional[bool] = UNSET


class ActionItemDict(TypedDict):
    id: NotRequired[str]
    text: NotRequired[str]
    status: NotRequired[ActionItemStatusOrStr]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    due_date: NotRequired[str | None]
    note_id: NotRequired[str | None]
    assignees: NotRequired[list[ActionItemAssigneeDict]]
    completion_type: NotRequired[CompletionTypeOrStr]
    ai_detected: NotRequired[bool]
    recording_offset: NotRequired[float | None]
    ai_suggestion_accepted_by_user: NotRequired[bool]
