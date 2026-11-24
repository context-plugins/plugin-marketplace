from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.condition_set_status1 import ConditionSetStatus1OrStr


class ConditionSetListItem(SdkBaseModel):
    id: str
    """The UUID of the condition set."""

    name: str
    """The display name of the condition set."""

    status: ConditionSetStatus1OrStr
    """Whether the condition set is currently active or has been archived."""

    created: int
    """The time the condition set was created. Measured in seconds since the Unix epoch."""

    updated: int
    """The time the condition set was last updated. Measured in seconds since the Unix epoch."""

    purpose: Literal["dynamic_content"] = "dynamic_content"
    """The purpose of the condition set, indicating its intended use."""


class ConditionSetListItemDict(TypedDict):
    id: str
    name: str
    status: ConditionSetStatus1OrStr
    created: int
    updated: int
    purpose: Literal["dynamic_content"]
