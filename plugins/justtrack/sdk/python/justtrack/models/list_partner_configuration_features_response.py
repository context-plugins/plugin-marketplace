from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .partner_configuration_feature_output import (
    PartnerConfigurationFeatureOutput,
    PartnerConfigurationFeatureOutputDict,
)


class ListPartnerConfigurationFeaturesResponse(SdkBaseModel):
    results: list[PartnerConfigurationFeatureOutput]


class ListPartnerConfigurationFeaturesResponseDict(TypedDict):
    results: list[PartnerConfigurationFeatureOutputDict]
