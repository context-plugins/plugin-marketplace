from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name1 import Name1OrStr


class AnalyticsBinKey(SdkBaseModel):
    name: Optional[Name1OrStr] = UNSET
    """The criterion by which to bin the results."""

    value: Optional[int] = UNSET
    """The value of the criterion that defines the bin."""


class AnalyticsBinKeyDict(TypedDict):
    name: NotRequired[Name1OrStr]
    value: NotRequired[int]
