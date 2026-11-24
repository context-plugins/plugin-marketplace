from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .city_metric import CityMetric, CityMetricDict
from .enums.facet1 import Facet1OrStr
from .other_metrics import OtherMetrics, OtherMetricsDict


class CityMetrics(SdkBaseModel):
    unit: Optional[str] = UNSET
    units: Optional[int] = UNSET
    facet: Optional[Facet1OrStr] = UNSET
    unit_reference: Optional[str] = UNSET
    metrics: Optional[list[CityMetric]] = UNSET
    other_metrics: Optional[OtherMetrics] = UNSET


class CityMetricsDict(TypedDict):
    unit: NotRequired[str]
    units: NotRequired[int]
    facet: NotRequired[Facet1OrStr]
    unit_reference: NotRequired[str]
    metrics: NotRequired[list[CityMetricDict]]
    other_metrics: NotRequired[OtherMetricsDict]
