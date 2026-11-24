from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.facet_bitly_qr_codes_api import FacetBitlyQrCodesApiOrStr


class BaseScanMetrics(SdkBaseModel):
    unit: Optional[str] = UNSET
    units: Optional[int] = UNSET
    facet: Optional[FacetBitlyQrCodesApiOrStr] = UNSET
    unit_reference: Optional[str] = UNSET


class BaseScanMetricsDict(TypedDict):
    unit: NotRequired[str]
    units: NotRequired[int]
    facet: NotRequired[FacetBitlyQrCodesApiOrStr]
    unit_reference: NotRequired[str]
