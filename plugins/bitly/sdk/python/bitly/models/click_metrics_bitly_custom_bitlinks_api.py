from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .click_metric import ClickMetric, ClickMetricDict
from .enums.facet_bitly_custom_bitlinks_api import FacetBitlyCustomBitlinksApiOrStr


class ClickMetricsBitlyCustomBitlinksApi(SdkBaseModel):
    unit: Optional[str] = UNSET
    units: Optional[int] = UNSET
    facet: Optional[FacetBitlyCustomBitlinksApiOrStr] = UNSET
    unit_reference: Optional[str] = UNSET
    metrics: Optional[list[ClickMetric]] = UNSET


class ClickMetricsBitlyCustomBitlinksApiDict(TypedDict):
    unit: NotRequired[str]
    units: NotRequired[int]
    facet: NotRequired[FacetBitlyCustomBitlinksApiOrStr]
    unit_reference: NotRequired[str]
    metrics: NotRequired[list[ClickMetricDict]]
