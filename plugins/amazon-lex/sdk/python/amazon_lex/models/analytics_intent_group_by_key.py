from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name3 import Name3OrStr


class AnalyticsIntentGroupByKey(SdkBaseModel):
    name: Optional[Name3OrStr] = UNSET
    """A category by which the intent analytics were grouped."""

    value: Optional[str] = UNSET
    """A member of the category by which the intent analytics were grouped."""


class AnalyticsIntentGroupByKeyDict(TypedDict):
    name: NotRequired[Name3OrStr]
    value: NotRequired[str]
