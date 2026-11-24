from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .count_item import CountItem, CountItemDict


class GroupClicks(SdkBaseModel):
    unit: Optional[str] = UNSET
    units: Optional[int] = UNSET
    unit_reference: Optional[str] = UNSET
    data: Optional[list[CountItem]] = UNSET


class GroupClicksDict(TypedDict):
    unit: NotRequired[str]
    units: NotRequired[int]
    unit_reference: NotRequired[str]
    data: NotRequired[list[CountItemDict]]
