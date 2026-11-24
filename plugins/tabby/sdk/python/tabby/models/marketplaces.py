from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class Marketplaces(SdkBaseModel):
    """Sellers' details within marketplaces."""

    seller_id: str
    """Unique ID of the seller within your marketplace."""

    seller_name: str
    """Name of the seller within your marketplace."""

    seller_category: str
    """Category of the seller within your marketplace."""

    seller_website: str
    """Website of the seller within your marketplace."""

    seller_phone: str
    """Seller's phone number."""

    seller_registration_date: RFC3339DateTime
    """Seller's registration date, in UTC, and displayed in ISO 8601 datetime format."""

    seller_commercial_registration_number: str
    """Seller's commercial registration number."""


class MarketplacesDict(TypedDict):
    seller_id: str
    seller_name: str
    seller_category: str
    seller_website: str
    seller_phone: str
    seller_registration_date: RFC3339DateTime
    seller_commercial_registration_number: str
