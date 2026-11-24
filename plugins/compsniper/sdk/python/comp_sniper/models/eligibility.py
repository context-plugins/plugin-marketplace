from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_comp_sniper_marketplace_and_shipping_shipping_rates_api import (
    StatusCompSniperMarketplaceAndShippingShippingRatesApiOrStr,
)
from .requirement import Requirement, RequirementDict


class Eligibility(SdkBaseModel):
    status: StatusCompSniperMarketplaceAndShippingShippingRatesApiOrStr
    requirements: list[Requirement]


class EligibilityDict(TypedDict):
    status: StatusCompSniperMarketplaceAndShippingShippingRatesApiOrStr
    requirements: list[RequirementDict]
