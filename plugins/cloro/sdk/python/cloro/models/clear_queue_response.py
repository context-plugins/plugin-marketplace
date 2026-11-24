from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ClearQueueResponse(SdkBaseModel):
    success: bool
    """Indicates the queue was cleared successfully."""

    cleared: int
    """Number of queued tasks that were removed."""


class ClearQueueResponseDict(TypedDict):
    success: bool
    cleared: int
