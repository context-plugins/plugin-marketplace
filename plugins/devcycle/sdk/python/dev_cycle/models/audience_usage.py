from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .audience_feature import AudienceFeature, AudienceFeatureDict


class AudienceUsage(SdkBaseModel):
    features: list[AudienceFeature]


class AudienceUsageDict(TypedDict):
    features: list[AudienceFeatureDict]
