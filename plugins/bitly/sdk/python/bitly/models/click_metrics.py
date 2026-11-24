from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .click_metric import ClickMetric, ClickMetricDict
from .enums.facet1 import Facet1OrStr


class ClickMetrics(SdkBaseModel):
    unit: Optional[str] = UNSET
    units: Optional[int] = UNSET
    facet: Optional[Facet1OrStr] = UNSET
    unit_reference: Optional[str] = UNSET
    metrics: Optional[list[ClickMetric]] = UNSET


class ClickMetricsDict(TypedDict):
    unit: NotRequired[str]
    units: NotRequired[int]
    facet: NotRequired[Facet1OrStr]
    unit_reference: NotRequired[str]
    metrics: NotRequired[list[ClickMetricDict]]
