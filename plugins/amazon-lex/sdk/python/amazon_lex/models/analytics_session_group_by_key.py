from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name14 import Name14OrStr


class AnalyticsSessionGroupByKey(SdkBaseModel):
    name: Optional[Name14OrStr] = UNSET
    """The category by which the session analytics were grouped."""

    value: Optional[str] = UNSET
    """A member of the category by which the session analytics were grouped."""


class AnalyticsSessionGroupByKeyDict(TypedDict):
    name: NotRequired[Name14OrStr]
    value: NotRequired[str]
