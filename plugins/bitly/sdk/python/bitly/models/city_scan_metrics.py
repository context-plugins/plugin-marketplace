from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .city_scan_metric import CityScanMetric, CityScanMetricDict
from .enums.facet_bitly_qr_codes_api import FacetBitlyQrCodesApiOrStr
from .other_scan_metrics import OtherScanMetrics, OtherScanMetricsDict


class CityScanMetrics(SdkBaseModel):
    unit: Optional[str] = UNSET
    units: Optional[int] = UNSET
    facet: Optional[FacetBitlyQrCodesApiOrStr] = UNSET
    unit_reference: Optional[str] = UNSET
    metrics: Optional[list[CityScanMetric]] = UNSET
    other_metrics: Optional[OtherScanMetrics] = UNSET


class CityScanMetricsDict(TypedDict):
    unit: NotRequired[str]
    units: NotRequired[int]
    facet: NotRequired[FacetBitlyQrCodesApiOrStr]
    unit_reference: NotRequired[str]
    metrics: NotRequired[list[CityScanMetricDict]]
    other_metrics: NotRequired[OtherScanMetricsDict]
