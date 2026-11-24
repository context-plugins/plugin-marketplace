from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class Automation(SdkBaseModel):
    """An automation workflow that connects a trigger to one or more actions."""

    uid: Optional[str] = UNSET
    """Unique identifier of the automation."""

    name: Optional[str] = UNSET
    """Display name of the automation."""

    status: Optional[StatusOrStr] = UNSET
    """Current status of the automation."""

    trigger: Optional[Any] = UNSET
    """Configuration for the automation trigger condition."""

    steps: Optional[list[Any]] = UNSET
    """Ordered list of action steps executed when the trigger fires."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the automation was created."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the automation was last updated."""


class AutomationDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    status: NotRequired[StatusOrStr]
    trigger: NotRequired[Any]
    steps: NotRequired[list[Any]]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
