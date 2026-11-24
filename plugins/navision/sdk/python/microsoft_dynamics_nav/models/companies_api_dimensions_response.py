from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension import Dimension, DimensionDict


class CompaniesApiDimensionsResponse(SdkBaseModel):
    value: Optional[list[Dimension]] = UNSET


class CompaniesApiDimensionsResponseDict(TypedDict):
    value: NotRequired[list[DimensionDict]]
