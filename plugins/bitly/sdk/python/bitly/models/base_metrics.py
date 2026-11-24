from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.facet1 import Facet1OrStr


class BaseMetrics(SdkBaseModel):
    unit: Optional[str] = UNSET
    units: Optional[int] = UNSET
    facet: Optional[Facet1OrStr] = UNSET
    unit_reference: Optional[str] = UNSET


class BaseMetricsDict(TypedDict):
    unit: NotRequired[str]
    units: NotRequired[int]
    facet: NotRequired[Facet1OrStr]
    unit_reference: NotRequired[str]
