from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .card import Card, CardDict
from .item1_comp_sniper_marketplace_and_shipping_psa_api import (
    Item1CompSniperMarketplaceAndShippingPsaApi,
    Item1CompSniperMarketplaceAndShippingPsaApiDict,
)
from .population import Population, PopulationDict
from .price_by_grade import PriceByGrade, PriceByGradeDict
from .price_summary import PriceSummary, PriceSummaryDict


class V1PsaCardResponse(SdkBaseModel):
    card: Optional[Card] = UNSET
    price_by_grade: Optional[list[PriceByGrade]] = Field(default=UNSET, alias="priceByGrade")
    population: OptionalNullable[Population] = UNSET
    items: Optional[list[Item1CompSniperMarketplaceAndShippingPsaApi]] = UNSET
    summary: OptionalNullable[PriceSummary] = UNSET
    """Deterministic price intelligence over the returned sold items."""

    other_matches: Optional[list[Any]] = Field(default=UNSET, alias="otherMatches")


class V1PsaCardResponseDict(TypedDict):
    card: NotRequired[CardDict]
    price_by_grade: NotRequired[list[PriceByGradeDict]]
    population: NotRequired[PopulationDict | None]
    items: NotRequired[list[Item1CompSniperMarketplaceAndShippingPsaApiDict]]
    summary: NotRequired[PriceSummaryDict | None]
    other_matches: NotRequired[list[Any]]
