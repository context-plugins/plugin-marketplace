from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .education_api import EducationApi, EducationApiDict
from .job_history_api_compiled_company import JobHistoryApiCompiledCompany, JobHistoryApiCompiledCompanyDict
from .npi_data4 import NpiData4, NpiData4Dict
from .profile_email_api import ProfileEmailApi, ProfileEmailApiDict
from .profile_list_api import ProfileListApi, ProfileListApiDict
from .profile_phone_api import ProfilePhoneApi, ProfilePhoneApiDict


class ProfileApiWithMetadataCompiledCompany(SdkBaseModel):
    profile_list: Optional[ProfileListApi] = UNSET
    """Profile List this contact was added to."""

    id: Optional[int] = UNSET
    status: Optional[str] = UNSET
    """Either "complete", "progress", "searching" or "not queued". A status other than "complete" indicates the lookup
    is not finished, and the contact info is not fully available yet."""

    name: OptionalNullable[str] = UNSET
    profile_pic: OptionalNullable[str] = UNSET
    """profile_pic deprecated"""

    linkedin_url: OptionalNullable[str] = UNSET
    connections: Optional[int] = UNSET
    """Number of LinkedIn connections for this profile"""

    links: Optional[dict[str, Any]] = UNSET
    location: OptionalNullable[str] = UNSET
    current_title: OptionalNullable[str] = UNSET
    current_employer: OptionalNullable[str] = UNSET
    current_employer_id: Optional[int] = UNSET
    current_employer_domain: OptionalNullable[str] = UNSET
    """This person's company's domain name."""

    current_employer_website: OptionalNullable[str] = UNSET
    """This person's company's website."""

    current_employer_linkedin_url: OptionalNullable[str] = UNSET
    """This person's company's LinkedIn URL."""

    current_employer_industry: OptionalNullable[str] = UNSET
    """This person's company's industry."""

    job_history: Optional[list[JobHistoryApiCompiledCompany]] = UNSET
    education: Optional[list[EducationApi]] = UNSET
    skills: OptionalNullable[list[str]] = UNSET
    birth_year: Optional[int] = UNSET
    region_latitude: OptionalNullable[float] = UNSET
    region_longitude: OptionalNullable[float] = UNSET
    city: OptionalNullable[str] = UNSET
    region: OptionalNullable[str] = UNSET
    country: Optional[str] = UNSET
    country_code: OptionalNullable[str] = UNSET
    npi_data: Optional[NpiData4] = UNSET
    """The format of the NPI data that is serialized to the UI on the search page."""

    tags: Optional[str] = UNSET
    return_cached_emails: Optional[bool] = UNSET
    """Indicates if cached emails were returned in the initial synchronous response. If false, email fields will be null
    until the lookup is complete."""

    linkedin_url_active: Optional[bool] = UNSET
    """Indicates if the LinkedIn profile exists or is no longer available."
    * ``True`` = Active (as of last update)
    * ``False`` = Unavailable (as of last update)"""

    recommended_email: OptionalNullable[str] = UNSET
    recommended_personal_email: OptionalNullable[str] = UNSET
    recommended_professional_email: OptionalNullable[str] = UNSET
    current_work_email: OptionalNullable[str] = UNSET
    current_personal_email: OptionalNullable[str] = UNSET
    emails: Optional[list[ProfileEmailApi]] = UNSET
    phones: Optional[list[ProfilePhoneApi]] = UNSET
    metadata: Optional[dict[str, Any]] = UNSET
    """User metadata about the profile, such as external ids, tags, notes, etc."""


class ProfileApiWithMetadataCompiledCompanyDict(TypedDict):
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
    npi_data: NotRequired[NpiData4Dict]
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
    metadata: NotRequired[dict[str, Any]]
