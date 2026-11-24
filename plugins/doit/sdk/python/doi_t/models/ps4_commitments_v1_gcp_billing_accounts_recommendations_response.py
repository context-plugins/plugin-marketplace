from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .gcp_recommendation import GcpRecommendation, GcpRecommendationDict


class Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse(SdkBaseModel):
    items: list[GcpRecommendation]
    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    """Reserved for pagination. Currently always ``null``."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Number of recommendations returned in ``items``."""


class Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponseDict(TypedDict):
    items: list[GcpRecommendationDict]
    page_token: NotRequired[str | None]
    row_count: NotRequired[int]
