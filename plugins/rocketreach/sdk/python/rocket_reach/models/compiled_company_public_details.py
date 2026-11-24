from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompiledCompanyPublicDetails(SdkBaseModel):
    """Serializer for company details (API)."""

    id: Optional[int] = UNSET
    """RocketReach internal unique company ID"""

    name: Optional[str] = UNSET
    """Name of the company"""

    email_domain: Optional[str] = UNSET
    """Email domain for the company"""

    ticker_symbol: Optional[str] = UNSET
    """Ticker symbol for the company (if available)"""

    industry_str: Optional[str] = UNSET
    """Industry of the company"""

    city: Optional[str] = UNSET
    """City of the company"""

    region: Optional[str] = UNSET
    """Region of the company"""

    country_code: Optional[str] = UNSET
    """Country code of the company"""


class CompiledCompanyPublicDetailsDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    email_domain: NotRequired[str]
    ticker_symbol: NotRequired[str]
    industry_str: NotRequired[str]
    city: NotRequired[str]
    region: NotRequired[str]
    country_code: NotRequired[str]
