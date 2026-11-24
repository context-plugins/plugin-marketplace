from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .education_api import EducationApi, EducationApiDict
from .job_history_api_compiled_company import JobHistoryApiCompiledCompany, JobHistoryApiCompiledCompanyDict
from .npi_data_rocket_reach_people_data_api import NpiDataRocketReachPeopleDataApi, NpiDataRocketReachPeopleDataApiDict
from .profile_email_api import ProfileEmailApi, ProfileEmailApiDict
from .profile_list_api import ProfileListApi, ProfileListApiDict
from .profile_phone_api import ProfilePhoneApi, ProfilePhoneApiDict


class UniversalCreditPersonLookupOutputWithMetadata(SdkBaseModel):
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

    birth_year: Optional[str] = UNSET
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

    return_cached_emails: Optional[bool] = UNSET
    """Indicates if cached emails were returned in the initial synchronous response. If false, email fields will be null
    until the lookup is complete."""

    linkedin_url_active: Optional[bool] = UNSET
    """Indicates if the LinkedIn profile exists or is no longer available.
    * ``True`` = Active (as of last update)
    * ``False`` = Unavailable (as of last update)"""

    job_history: Optional[list[JobHistoryApiCompiledCompany]] = UNSET
    """[``reveal_detailed_person_enrichment=true`` required or this field will not be returned] List of professional
    experiences for the profile"""

    education: Optional[list[EducationApi]] = UNSET
    """[``reveal_detailed_person_enrichment=true`` required or this field will not be returned] List of educational
    experiences for the profile"""

    skills: OptionalNullable[list[str]] = UNSET
    """[``reveal_detailed_person_enrichment=true`` required or this field will not be returned] List of skills for the
    profile"""

    links: Optional[dict[str, Any]] = UNSET
    """[``reveal_detailed_person_enrichment=true`` required or this field will not be returned] Social media links for
    the profile"""

    npi_data: Optional[NpiDataRocketReachPeopleDataApi] = UNSET
    """[``reveal_healthcare_enrichment=true`` required or this field will not be returned] List of NPI data objects for
    the profile"""

    recommended_email: OptionalNullable[str] = UNSET
    """[``reveal_personal_email OR reveal_professional_email=true`` required or this field will not be returned]
    Recommended email for the profile"""

    emails: Optional[list[ProfileEmailApi]] = UNSET
    """[``reveal_personal_email OR reveal_professional_email=true`` required or this field will not be returned] List of
    email objects for the profile"""

    recommended_personal_email: OptionalNullable[str] = UNSET
    """[``reveal_personal_email=true`` required or this field will not be returned] Recommended personal email for the
    profile"""

    current_personal_email: OptionalNullable[str] = UNSET
    """[``reveal_personal_email=true`` required or this field will not be returned] Current personal email for the
    profile"""

    recommended_professional_email: OptionalNullable[str] = UNSET
    """[``reveal_professional_email=true`` required or this field will not be returned] Recommended professional email
    for the profile"""

    current_work_email: OptionalNullable[str] = UNSET
    """[``reveal_professional_email=true`` required or this field will not be returned] Current work email for the
    profile"""

    phones: Optional[list[ProfilePhoneApi]] = UNSET
    """[``reveal_phone=true`` required or this field will not be returned] List of phone number objects for the
    profile"""

    metadata: Optional[dict[str, Any]] = UNSET
    """User metadata associated with the profile lookup"""


class UniversalCreditPersonLookupOutputWithMetadataDict(TypedDict):
    profile_list: NotRequired[ProfileListApiDict]
    id: NotRequired[int]
    status: NotRequired[str]
    name: NotRequired[str | None]
    profile_pic: NotRequired[str | None]
    linkedin_url: NotRequired[str | None]
    connections: NotRequired[int]
    location: NotRequired[str | None]
    current_title: NotRequired[str | None]
    current_employer: NotRequired[str | None]
    current_employer_id: NotRequired[int]
    current_employer_domain: NotRequired[str | None]
    current_employer_website: NotRequired[str | None]
    current_employer_linkedin_url: NotRequired[str | None]
    birth_year: NotRequired[str]
    region_latitude: NotRequired[float | None]
    region_longitude: NotRequired[float | None]
    city: NotRequired[str | None]
    region: NotRequired[str | None]
    country: NotRequired[str]
    country_code: NotRequired[str | None]
    return_cached_emails: NotRequired[bool]
    linkedin_url_active: NotRequired[bool]
    job_history: NotRequired[list[JobHistoryApiCompiledCompanyDict]]
    education: NotRequired[list[EducationApiDict]]
    skills: NotRequired[list[str] | None]
    links: NotRequired[dict[str, Any]]
    npi_data: NotRequired[NpiDataRocketReachPeopleDataApiDict]
    recommended_email: NotRequired[str | None]
    emails: NotRequired[list[ProfileEmailApiDict]]
    recommended_personal_email: NotRequired[str | None]
    current_personal_email: NotRequired[str | None]
    recommended_professional_email: NotRequired[str | None]
    current_work_email: NotRequired[str | None]
    phones: NotRequired[list[ProfilePhoneApiDict]]
    metadata: NotRequired[dict[str, Any]]
