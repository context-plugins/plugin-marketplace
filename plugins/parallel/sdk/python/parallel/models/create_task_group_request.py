from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.metadata1 import Metadata1, Metadata1Dict


class CreateTaskGroupRequest(SdkBaseModel):
    """Request to create a task group."""

    metadata: Optional[dict[str, Metadata1]] = UNSET
    """User-provided metadata stored with the task group."""


class CreateTaskGroupRequestDict(TypedDict):
    metadata: NotRequired[dict[str, Metadata1Dict]]
