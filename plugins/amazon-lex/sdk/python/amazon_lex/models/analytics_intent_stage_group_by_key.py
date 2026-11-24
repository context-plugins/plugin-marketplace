from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name8 import Name8OrStr


class AnalyticsIntentStageGroupByKey(SdkBaseModel):
    name: Optional[Name8OrStr] = UNSET
    """A category by which the intent stage analytics were grouped."""

    value: Optional[str] = UNSET
    """A member of the category by which the intent stage analytics were grouped."""


class AnalyticsIntentStageGroupByKeyDict(TypedDict):
    name: NotRequired[Name8OrStr]
    value: NotRequired[str]
