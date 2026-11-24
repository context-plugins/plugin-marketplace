from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UniversalCreditCompanySearchOutput(SdkBaseModel):
    """Universal Credit Serializer for company details (API)."""

    id: Optional[int] = UNSET
    """RocketReach internal unique company ID"""

    name: Optional[str] = UNSET
    """Name of the company"""

    ticker_symbol: Optional[str] = UNSET
    """Ticker symbol of the company (if available)"""

    industry_str: Optional[str] = UNSET
    """Industry of the company"""

    city: Optional[str] = UNSET
    """City where the company is located"""

    region: Optional[str] = UNSET
    """Region where the company is located"""

    country_code: Optional[str] = UNSET
    """Country where the company is located"""

    linkedin_url: Optional[str] = UNSET
    """LinkedIn URL of the company"""

    logo_url: Optional[str] = UNSET
    """Logo URL of the company"""


class UniversalCreditCompanySearchOutputDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    ticker_symbol: NotRequired[str]
    industry_str: NotRequired[str]
    city: NotRequired[str]
    region: NotRequired[str]
    country_code: NotRequired[str]
    linkedin_url: NotRequired[str]
    logo_url: NotRequired[str]
