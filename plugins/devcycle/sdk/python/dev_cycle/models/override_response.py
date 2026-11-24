from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .feature_override import FeatureOverride, FeatureOverrideDict


class OverrideResponse(SdkBaseModel):
    overrides: list[FeatureOverride]


class OverrideResponseDict(TypedDict):
    overrides: list[FeatureOverrideDict]
