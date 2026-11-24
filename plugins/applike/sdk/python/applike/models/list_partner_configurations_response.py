from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .partner_configuration_output import PartnerConfigurationOutput, PartnerConfigurationOutputDict


class ListPartnerConfigurationsResponse(SdkBaseModel):
    results: list[PartnerConfigurationOutput]


class ListPartnerConfigurationsResponseDict(TypedDict):
    results: list[PartnerConfigurationOutputDict]
