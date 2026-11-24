from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.unit import UnitOrStr
from .link_clicks import LinkClicks, LinkClicksDict


class Clicks(SdkBaseModel):
    link_clicks: Optional[list[LinkClicks]] = UNSET
    units: Optional[int] = UNSET
    unit: Optional[UnitOrStr] = UNSET
    unit_reference: Optional[str] = UNSET


class ClicksDict(TypedDict):
    link_clicks: NotRequired[list[LinkClicksDict]]
    units: NotRequired[int]
    unit: NotRequired[UnitOrStr]
    unit_reference: NotRequired[str]
