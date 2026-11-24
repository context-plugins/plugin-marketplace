from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExperiencePriority(SdkBaseModel):
    """Priority ordering of experiences for conflict resolution."""

    priority: Optional[list[str]] = UNSET
    """Ordered list of experience UIDs from highest to lowest priority."""


class ExperiencePriorityDict(TypedDict):
    priority: NotRequired[list[str]]
