from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .compiled_company_api2 import CompiledCompanyApi2, CompiledCompanyApi2Dict
from .education_api import EducationApi, EducationApiDict
from .job_history_api_compiled_company import JobHistoryApiCompiledCompany, JobHistoryApiCompiledCompanyDict
from .npi_data import NpiData, NpiDataDict
from .profile_email_api import ProfileEmailApi, ProfileEmailApiDict
from .profile_list_api import ProfileListApi, ProfileListApiDict
from .profile_phone_api import ProfilePhoneApi, ProfilePhoneApiDict


class ProfileApiSerializerWithCompiledCompany(SdkBaseModel):
    profile_list: Optional[ProfileListApi] = UNSET
    """Profile List this contact was added to."""

    id: Optional[int] = UNSET
    """RocketReach internal unique profile ID"""

    status: Optional[str] = UNSET
    """Status of the profile lookup. Either "complete", "progress", "searching" or "not queued"
    """

    name: OptionalNullable[str] = UNSET
    """Name of the profile"""

    profile_pic: OptionalNullable[str] = UNSET
    """profile_pic deprecated"""

    linkedin_url: OptionalNullable[str] = UNSET
    """LinkedIn URL of the profile"""

    connections: Optional[int] = UNSET
    """Number of LinkedIn connections for this profile"""

    links: Optional[dict[str, Any]] = UNSET
    """Social media links for the profile"""

    location: OptionalNullable[str] = UNSET
    """Location of the profile"""

    current_title: OptionalNullable[str] = UNSET
    """Current job title of the profile"""

    current_employer: OptionalNullable[str] = UNSET
    """Current employer of the profile"""

    current_employer_id: Optional[int] = UNSET
    """RocketReach internal unique company ID"""

    current_employer_domain: OptionalNullable[str] = UNSET
    """This person's company's domain name."""

    current_employer_website: OptionalNullable[str] = UNSET
    """This person's company's website."""

    current_employer_linkedin_url: OptionalNullable[str] = UNSET
    """This person's company's LinkedIn URL."""

    current_employer_industry: OptionalNullable[str] = UNSET
    """This person's company's industry."""

    job_history: Optional[list[JobHistoryApiCompiledCompany]] = UNSET
    """List of professional experiences for the profile"""

    education: Optional[list[EducationApi]] = UNSET
    """List of educational experiences for the profile"""

    skills: OptionalNullable[list[str]] = UNSET
    """List of skills for the profile"""

    birth_year: Optional[int] = UNSET
    """Year of birth of the profile"""

    region_latitude: OptionalNullable[float] = UNSET
    """Latitude of the region of the profile"""

    region_longitude: OptionalNullable[float] = UNSET
    """Longitude of the region of the profile"""

    city: OptionalNullable[str] = UNSET
    """City of the profile"""

    region: OptionalNullable[str] = UNSET
    """Region of the profile"""

    country: Optional[str] = UNSET
    """Country of the profile"""

    country_code: OptionalNullable[str] = UNSET
    """Country code of the profile"""

    npi_data: Optional[NpiData] = UNSET
    """List of NPI data objects for the profile"""

    tags: Optional[str] = UNSET
    return_cached_emails: Optional[bool] = UNSET
    """Indicates if cached emails were returned in the initial synchronous response. If false, email fields will be null
    until the lookup is complete."""

    linkedin_url_active: Optional[bool] = UNSET
    """Indicates if the LinkedIn profile exists or is no longer available.
    * ``True`` = Active (as of last update)
    * ``False`` = Unavailable (as of last update)"""

    recommended_email: OptionalNullable[str] = UNSET
    """Recommended email for the profile"""

    recommended_personal_email: OptionalNullable[str] = UNSET
    """Recommended personal email for the profile"""

    recommended_professional_email: OptionalNullable[str] = UNSET
    """Recommended professional email for the profile"""

    current_work_email: OptionalNullable[str] = UNSET
    """Current work email for the profile"""

    current_personal_email: OptionalNullable[str] = UNSET
    """Current personal email for the profile"""

    emails: Optional[list[ProfileEmailApi]] = UNSET
    """List of email objects for the profile"""

    phones: Optional[list[ProfilePhoneApi]] = UNSET
    """List of phone number objects for the profile"""

    company: Optional[CompiledCompanyApi2] = UNSET
    """Object representing the employer of the profile"""


class ProfileApiSerializerWithCompiledCompanyDict(TypedDict):
    profile_list: NotRequired[ProfileListApiDict]
    id: NotRequired[int]
    status: NotRequired[str]
    name: NotRequired[str | None]
    profile_pic: NotRequired[str | None]
    linkedin_url: NotRequired[str | None]
    connections: NotRequired[int]
    links: NotRequired[dict[str, Any]]
    location: NotRequired[str | None]
    current_title: NotRequired[str | None]
    current_employer: NotRequired[str | None]
    current_employer_id: NotRequired[int]
    current_employer_domain: NotRequired[str | None]
    current_employer_website: NotRequired[str | None]
    current_employer_linkedin_url: NotRequired[str | None]
    current_employer_industry: NotRequired[str | None]
    job_history: NotRequired[list[JobHistoryApiCompiledCompanyDict]]
    education: NotRequired[list[EducationApiDict]]
    skills: NotRequired[list[str] | None]
    birth_year: NotRequired[int]
    region_latitude: NotRequired[float | None]
    region_longitude: NotRequired[float | None]
    city: NotRequired[str | None]
    region: NotRequired[str | None]
    country: NotRequired[str]
    country_code: NotRequired[str | None]
    npi_data: NotRequired[NpiDataDict]
    tags: NotRequired[str]
    return_cached_emails: NotRequired[bool]
    linkedin_url_active: NotRequired[bool]
    recommended_email: NotRequired[str | None]
    recommended_personal_email: NotRequired[str | None]
    recommended_professional_email: NotRequired[str | None]
    current_work_email: NotRequired[str | None]
    current_personal_email: NotRequired[str | None]
    emails: NotRequired[list[ProfileEmailApiDict]]
    phones: NotRequired[list[ProfilePhoneApiDict]]
    company: NotRequired[CompiledCompanyApi2Dict]
