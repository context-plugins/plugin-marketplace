from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .feature import Feature, FeatureDict


class CompaniesApiFeaturesResponse(SdkBaseModel):
    value: Optional[list[Feature]] = UNSET


class CompaniesApiFeaturesResponseDict(TypedDict):
    value: NotRequired[list[FeatureDict]]
