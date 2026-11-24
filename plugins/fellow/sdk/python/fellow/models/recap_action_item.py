from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .action_item_assignee import ActionItemAssignee, ActionItemAssigneeDict
from .enums.action_item_status import ActionItemStatusOrStr
from .enums.completion_type import CompletionTypeOrStr


class RecapActionItem(SdkBaseModel):
    timestamp: int
    text: str
    id: OptionalNullable[str] = UNSET
    assignees: list[ActionItemAssignee]
    completion_type: CompletionTypeOrStr | None
    due_date: OptionalNullable[str] = UNSET
    accepted: bool
    status: ActionItemStatusOrStr


class RecapActionItemDict(TypedDict):
    timestamp: int
    text: str
    id: NotRequired[str | None]
    assignees: list[ActionItemAssigneeDict]
    completion_type: CompletionTypeOrStr | None
    due_date: NotRequired[str | None]
    accepted: bool
    status: ActionItemStatusOrStr
