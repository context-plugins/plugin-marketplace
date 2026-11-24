from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .action_item import ActionItem, ActionItemDict


class ActionItemResponse(SdkBaseModel):
    """Response containing a single action item."""

    action_item: ActionItem
    """API model for action items. Action items are stored as NoteBlock objects with type='todo'."""


class ActionItemResponseDict(TypedDict):
    action_item: ActionItemDict
