from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .click_metric import ClickMetric, ClickMetricDict
from .enums.facet1_bitly_groups_api import Facet1BitlyGroupsApiOrStr


class GroupsLinksClicksDevicesResponse(SdkBaseModel):
    unit: Optional[str] = UNSET
    units: Optional[int] = UNSET
    facet: Optional[Facet1BitlyGroupsApiOrStr] = UNSET
    unit_reference: Optional[str] = UNSET
    metrics: Optional[list[ClickMetric]] = UNSET


class GroupsLinksClicksDevicesResponseDict(TypedDict):
    unit: NotRequired[str]
    units: NotRequired[int]
    facet: NotRequired[Facet1BitlyGroupsApiOrStr]
    unit_reference: NotRequired[str]
    metrics: NotRequired[list[ClickMetricDict]]
