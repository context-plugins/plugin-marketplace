from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .tracking_feature_state import TrackingFeatureState, TrackingFeatureStateDict


class TrackingSettings(SdkBaseModel):
    site_id: int
    version: int
    """Catalogue version."""

    bundle: str
    """The build actually served for this site."""

    enabled: list[str]
    features: list[TrackingFeatureState]


class TrackingSettingsDict(TypedDict):
    site_id: int
    version: int
    bundle: str
    enabled: list[str]
    features: list[TrackingFeatureStateDict]
