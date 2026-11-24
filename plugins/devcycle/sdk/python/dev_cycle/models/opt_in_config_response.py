from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .feature_dev_cycle_bucketing_feature_opt_in_api import (
    FeatureDevCycleBucketingFeatureOptInApi,
    FeatureDevCycleBucketingFeatureOptInApiDict,
)
from .settings import Settings, SettingsDict


class OptInConfigResponse(SdkBaseModel):
    settings: Settings
    features: list[FeatureDevCycleBucketingFeatureOptInApi]


class OptInConfigResponseDict(TypedDict):
    settings: SettingsDict
    features: list[FeatureDevCycleBucketingFeatureOptInApiDict]
