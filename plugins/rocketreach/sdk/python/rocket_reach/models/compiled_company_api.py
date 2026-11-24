from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .compiled_company_address1 import CompiledCompanyAddress1, CompiledCompanyAddress1Dict
from .links import Links, LinksDict


class CompiledCompanyApi(SdkBaseModel):
    """Serializes purchased company fields when looked up."""

    id: Optional[int] = UNSET
    """RocketReach internal unique company ID"""

    name: Optional[str] = UNSET
    """Name of the company"""

    domain: Optional[str] = UNSET
    """Web domain for the company"""

    email_domain: Optional[str] = UNSET
    """Email domain for the company"""

    website_domain: OptionalNullable[str] = UNSET
    """Website for the company"""

    ticker_symbol: OptionalNullable[str] = UNSET
    """Ticker symbol for the company (if available)"""

    links: OptionalNullable[Links] = UNSET
    """Social media links for the company"""

    year_founded: OptionalNullable[int] = UNSET
    """Year the company was founded"""

    address: Optional[CompiledCompanyAddress1] = UNSET
    """Street address of the company"""

    phone: OptionalNullable[str] = UNSET
    """Phone number for the company"""

    fax: OptionalNullable[str] = UNSET
    """Fax number for the company"""

    num_employees: OptionalNullable[int] = UNSET
    """Number of employees working at the company"""

    revenue: OptionalNullable[int] = UNSET
    """Revenue of the company"""

    funding_investors: Optional[list[str]] = UNSET
    """List of names of founding investors for the company"""

    industry: OptionalNullable[str] = UNSET
    """Industry of the company"""

    sic_codes: Optional[list[int]] = UNSET
    """List of SIC codes for the company. Standard Industrial Classification (SIC) codes, are four-digit numerical codes
    used to categorize businesses by their primary industry"""

    rr_profile_url: Optional[str] = UNSET
    """URL of the RocketReach company profile page for the company"""

    description: OptionalNullable[str] = UNSET
    """Description of the company"""

    industry_keywords: Optional[list[str]] = UNSET
    """List of industry keywords for the company"""


class CompiledCompanyApiDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str]
    domain: NotRequired[str]
    email_domain: NotRequired[str]
    website_domain: NotRequired[str | None]
    ticker_symbol: NotRequired[str | None]
    links: NotRequired[LinksDict | None]
    year_founded: NotRequired[int | None]
    address: NotRequired[CompiledCompanyAddress1Dict]
    phone: NotRequired[str | None]
    fax: NotRequired[str | None]
    num_employees: NotRequired[int | None]
    revenue: NotRequired[int | None]
    funding_investors: NotRequired[list[str]]
    industry: NotRequired[str | None]
    sic_codes: NotRequired[list[int]]
    rr_profile_url: NotRequired[str]
    description: NotRequired[str | None]
    industry_keywords: NotRequired[list[str]]
