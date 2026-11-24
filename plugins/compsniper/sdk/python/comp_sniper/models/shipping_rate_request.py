from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contents import Contents, ContentsDict
from .enums.ebay_site_comp_sniper_marketplace_and_shipping_shipping_rates_api import (
    EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi,
    EbaySiteCompSniperMarketplaceAndShippingShippingRatesApiOrStr,
)
from .package import Package, PackageDict
from .ship_from import ShipFrom, ShipFromDict
from .ship_to import ShipTo, ShipToDict


class ShippingRateRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    ebay_site: EbaySiteCompSniperMarketplaceAndShippingShippingRatesApiOrStr = Field(
        default=EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi.EBAY_COM, alias="ebaySite"
    )
    ship_from: ShipFrom = Field(alias="shipFrom")
    ship_to: ShipTo = Field(alias="shipTo")
    package: Package
    contents: Optional[Contents] = UNSET


class ShippingRateRequestDict(TypedDict):
    ebay_site: NotRequired[EbaySiteCompSniperMarketplaceAndShippingShippingRatesApiOrStr]
    ship_from: ShipFromDict
    ship_to: ShipToDict
    package: PackageDict
    contents: NotRequired[ContentsDict]
