from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class MerchantDetails(SdkBaseModel):
    merchant_name: Optional[str] = Field(default=UNSET, alias="merchantName")
    """The name of the merchant."""

    merchant_id: Optional[str] = Field(default=UNSET, alias="merchantId")
    """Unique identifier for the merchant."""

    match_score: Optional[float] = Field(default=UNSET, alias="matchScore")
    """Confidence score of the match."""

    suburb: OptionalNullable[str] = UNSET
    """The suburb of the merchant location, or null if not available."""

    state: Optional[str] = UNSET
    """The state of the merchant location."""

    country: Optional[str] = UNSET
    """The country of the merchant location."""

    abn: Optional[str] = UNSET
    """The Australian Business Number (ABN) of the merchant."""

    entity_type: Optional[str] = Field(default=UNSET, alias="entityType")
    """The type of the merchant entity."""


class MerchantDetailsDict(TypedDict):
    merchant_name: NotRequired[str]
    merchant_id: NotRequired[str]
    match_score: NotRequired[float]
    suburb: NotRequired[str | None]
    state: NotRequired[str]
    country: NotRequired[str]
    abn: NotRequired[str]
    entity_type: NotRequired[str]
