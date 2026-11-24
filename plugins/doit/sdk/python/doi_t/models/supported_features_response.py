from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .supported_feature import SupportedFeature, SupportedFeatureDict


class SupportedFeaturesResponse(SdkBaseModel):
    """Response containing the supported features for a CloudConnect account."""

    supported_features: Optional[list[SupportedFeature]] = Field(default=UNSET, alias="supportedFeatures")
    """List of features and their permission status."""


class SupportedFeaturesResponseDict(TypedDict):
    supported_features: NotRequired[list[SupportedFeatureDict]]
