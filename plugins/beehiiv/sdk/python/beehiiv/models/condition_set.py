from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .condition_set_stats2 import ConditionSetStats2, ConditionSetStats2Dict
from .enums.condition_set_status1 import ConditionSetStatus1OrStr


class ConditionSet(SdkBaseModel):
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

    stats: Optional[ConditionSetStats2] = UNSET
    """Subscriber count statistics for the condition set. Included when ``expand[]=stats`` is specified in the
    request."""


class ConditionSetDict(TypedDict):
    id: str
    name: str
    status: ConditionSetStatus1OrStr
    created: int
    updated: int
    purpose: Literal["dynamic_content"]
    stats: NotRequired[ConditionSetStats2Dict]
