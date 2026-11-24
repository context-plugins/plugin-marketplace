from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MarkActionItemCompleteRequest(SdkBaseModel):
    """Request body for marking an action item as complete or incomplete."""

    completed: bool


class MarkActionItemCompleteRequestDict(TypedDict):
    completed: bool
