from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .list_partner_configuration_features_filter import (
    ListPartnerConfigurationFeaturesFilter,
    ListPartnerConfigurationFeaturesFilterDict,
)
from .required_page import RequiredPage, RequiredPageDict


class ListPartnerConfigurationFeaturesRequest(SdkBaseModel):
    filter: ListPartnerConfigurationFeaturesFilter
    page: RequiredPage


class ListPartnerConfigurationFeaturesRequestDict(TypedDict):
    filter: ListPartnerConfigurationFeaturesFilterDict
    page: RequiredPageDict
