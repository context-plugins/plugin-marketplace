from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .advertisement_opportunity import AdvertisementOpportunity, AdvertisementOpportunityDict


class AdvertisementOpportunitiesGetResponse(SdkBaseModel):
    data: list[AdvertisementOpportunity]
    """A list of post templates available for this publication."""

    total_results: int
    """The total number of results from all pages."""


class AdvertisementOpportunitiesGetResponseDict(TypedDict):
    data: list[AdvertisementOpportunityDict]
    total_results: int
