from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .partner_configuration_feature import PartnerConfigurationFeature, PartnerConfigurationFeatureDict


class UpsertPartnerConfigurationFeaturesRequest(SdkBaseModel):
    app_id: int = Field(alias="appId")
    """justtrack's internal ID for the app"""

    configurations: list[PartnerConfigurationFeature]
    partner_id: int = Field(alias="partnerId")
    """justtrack's internal ID for the partner"""


class UpsertPartnerConfigurationFeaturesRequestDict(TypedDict):
    app_id: int
    configurations: list[PartnerConfigurationFeatureDict]
    partner_id: int
