from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .city_metric import CityMetric, CityMetricDict
from .enums.facet_bitly_custom_bitlinks_api import FacetBitlyCustomBitlinksApiOrStr
from .other_metrics import OtherMetrics, OtherMetricsDict


class CityMetricsBitlyGroupsApi(SdkBaseModel):
    unit: Optional[str] = UNSET
    units: Optional[int] = UNSET
    facet: Optional[FacetBitlyCustomBitlinksApiOrStr] = UNSET
    unit_reference: Optional[str] = UNSET
    metrics: Optional[list[CityMetric]] = UNSET
    other_metrics: Optional[OtherMetrics] = UNSET


class CityMetricsBitlyGroupsApiDict(TypedDict):
    unit: NotRequired[str]
    units: NotRequired[int]
    facet: NotRequired[FacetBitlyCustomBitlinksApiOrStr]
    unit_reference: NotRequired[str]
    metrics: NotRequired[list[CityMetricDict]]
    other_metrics: NotRequired[OtherMetricsDict]
