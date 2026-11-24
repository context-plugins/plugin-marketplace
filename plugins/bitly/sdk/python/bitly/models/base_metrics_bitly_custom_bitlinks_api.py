from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.facet_bitly_custom_bitlinks_api import FacetBitlyCustomBitlinksApiOrStr


class BaseMetricsBitlyCustomBitlinksApi(SdkBaseModel):
    unit: Optional[str] = UNSET
    units: Optional[int] = UNSET
    facet: Optional[FacetBitlyCustomBitlinksApiOrStr] = UNSET
    unit_reference: Optional[str] = UNSET


class BaseMetricsBitlyCustomBitlinksApiDict(TypedDict):
    unit: NotRequired[str]
    units: NotRequired[int]
    facet: NotRequired[FacetBitlyCustomBitlinksApiOrStr]
    unit_reference: NotRequired[str]
