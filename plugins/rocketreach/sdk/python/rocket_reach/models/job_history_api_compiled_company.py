from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class JobHistoryApiCompiledCompany(SdkBaseModel):
    start_date: OptionalNullable[str] = UNSET
    """Start date of the work experience"""

    end_date: str = "Present"
    """End date of the work experience (Present if experience is current)"""

    company: OptionalNullable[str] = UNSET
    """Name of the company"""

    company_name: Optional[str] = UNSET
    """Name of the company"""

    company_id: OptionalNullable[int] = UNSET
    """RocketReach internal unique company ID"""

    company_linkedin_url: Optional[str] = UNSET
    """Linkedin URL of the company"""

    company_city: Optional[str] = UNSET
    """City of the company's location"""

    company_region: Optional[str] = UNSET
    """Region of the company's location"""

    company_country_code: Optional[str] = UNSET
    """Country code of the company's location"""

    department: Optional[str] = UNSET
    """Department of the work experience"""

    title: Optional[str] = UNSET
    """Job title of the work experience"""

    highest_level: Optional[str] = UNSET
    """Highest level of the work experience"""

    description: Optional[str] = UNSET
    """Description of the work experience"""

    last_updated: Optional[RFC3339DateTime] = UNSET
    """Timestamp of the last update of this work experience"""

    sub_department: OptionalNullable[str] = UNSET
    """Sub-department of the work experience"""

    is_current: bool = False
    """True if the experience is the profile's current role, False otherwise"""


class JobHistoryApiCompiledCompanyDict(TypedDict):
    start_date: NotRequired[str | None]
    end_date: NotRequired[str]
    company: NotRequired[str | None]
    company_name: NotRequired[str]
    company_id: NotRequired[int | None]
    company_linkedin_url: NotRequired[str]
    company_city: NotRequired[str]
    company_region: NotRequired[str]
    company_country_code: NotRequired[str]
    department: NotRequired[str]
    title: NotRequired[str]
    highest_level: NotRequired[str]
    description: NotRequired[str]
    last_updated: NotRequired[RFC3339DateTime]
    sub_department: NotRequired[str | None]
    is_current: NotRequired[bool]
