from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .teaser1 import Teaser1, Teaser1Dict


class UniversalCreditPersonSearchOutput(SdkBaseModel):
    id: Optional[int] = UNSET
    """RocketReach internal unique profile ID"""

    name: OptionalNullable[str] = UNSET
    """Name of the profile"""

    profile_pic: OptionalNullable[str] = UNSET
    """profile_pic deprecated"""

    linkedin_url: OptionalNullable[str] = UNSET
    """LinkedIn URL of the profile"""

    connections: Optional[int] = UNSET
    """Number of LinkedIn connections for this profile"""

    location: OptionalNullable[str] = UNSET
    """Location of the profile"""

    city: OptionalNullable[str] = UNSET
    """City of the profile"""

    region: OptionalNullable[str] = UNSET
    """Region of the profile"""

    country: Optional[str] = UNSET
    """Country code of the profile"""

    country_code: OptionalNullable[str] = UNSET
    """Country code of the profile"""

    current_title: OptionalNullable[str] = UNSET
    """Current job title of the profile"""

    current_employer: OptionalNullable[str] = UNSET
    """Current employer of the profile"""

    current_employer_domain: OptionalNullable[str] = UNSET
    """TDomain for the employer of the profile"""

    current_employer_website: OptionalNullable[str] = UNSET
    """Website for the employer of the profile"""

    teaser: OptionalNullable[Teaser1] = UNSET
    birth_year: Optional[int] = UNSET
    """Year of birth of the profile"""

    current_employer_id: Optional[int] = UNSET
    """RocketReach internal unique company ID"""

    current_employer_linkedin_url: OptionalNullable[str] = UNSET
    """LinkedIn URL for the employer of the profile"""

    region_latitude: OptionalNullable[float] = UNSET
    """Latitude of the region of the profile"""

    region_longitude: OptionalNullable[float] = UNSET
    """Longitude of the region of the profile"""

    suppressed: Optional[str] = UNSET
    """Returns True if this profile is blocked by a suppression list filter"""

    update_time: Optional[RFC3339DateTime] = UNSET
    """Timestamp of the last update for the profile"""


class UniversalCreditPersonSearchOutputDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str | None]
    profile_pic: NotRequired[str | None]
    linkedin_url: NotRequired[str | None]
    connections: NotRequired[int]
    location: NotRequired[str | None]
    city: NotRequired[str | None]
    region: NotRequired[str | None]
    country: NotRequired[str]
    country_code: NotRequired[str | None]
    current_title: NotRequired[str | None]
    current_employer: NotRequired[str | None]
    current_employer_domain: NotRequired[str | None]
    current_employer_website: NotRequired[str | None]
    teaser: NotRequired[Teaser1Dict | None]
    birth_year: NotRequired[int]
    current_employer_id: NotRequired[int]
    current_employer_linkedin_url: NotRequired[str | None]
    region_latitude: NotRequired[float | None]
    region_longitude: NotRequired[float | None]
    suppressed: NotRequired[str]
    update_time: NotRequired[RFC3339DateTime]
