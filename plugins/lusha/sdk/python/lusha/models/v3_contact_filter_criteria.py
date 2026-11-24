from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .education import Education, EducationDict
from .enums.existing_data_points_condition import ExistingDataPointsConditionOrStr
from .geographic_detail import GeographicDetail, GeographicDetailDict
from .score import Score, ScoreDict
from .signals import Signals, SignalsDict
from .v3_location import V3Location, V3LocationDict


class V3ContactFilterCriteria(SdkBaseModel):
    names: Optional[list[str]] = UNSET
    job_titles: Optional[list[str]] = Field(default=UNSET, alias="jobTitles")
    job_titles_exact_match: Optional[list[str]] = Field(default=UNSET, alias="jobTitlesExactMatch")
    normalized_job_titles: Optional[list[str]] = Field(default=UNSET, alias="normalizedJobTitles")
    search_text: Optional[str] = Field(default=UNSET, alias="searchText")
    countries: Optional[list[str]] = UNSET
    locations: Optional[list[V3Location]] = UNSET
    seniority_ids: Optional[list[int]] = Field(default=UNSET, alias="seniorityIds")
    departments: Optional[list[str]] = UNSET
    linkedin_urls: Optional[list[str]] = Field(default=UNSET, alias="linkedinUrls")
    existing_data_points: Optional[list[str]] = Field(default=UNSET, alias="existingDataPoints")
    signals: Optional[Signals] = UNSET
    emails: Optional[list[EmailStr]] = UNSET
    """Personal data — no catalog."""

    previous_emails: Optional[list[EmailStr]] = Field(default=UNSET, alias="previousEmails")
    """Personal data — no catalog."""

    previous_job_title: Optional[list[str]] = Field(default=UNSET, alias="previousJobTitle")
    skills: Optional[list[str]] = UNSET
    certifications: Optional[list[str]] = UNSET
    awards: Optional[list[str]] = UNSET
    ids: Optional[list[str]] = UNSET
    """Encrypted contact id from a prior search's ``results[].id``."""

    existing_data_points_condition: Optional[ExistingDataPointsConditionOrStr] = Field(
        default=UNSET, alias="existingDataPointsCondition"
    )
    """Pairs with ``existingDataPoints``."""

    job_changed_after_date: Optional[Date] = Field(default=UNSET, alias="jobChangedAfterDate")
    """Refinement-only — must be paired with a base filter (e.g. ``jobTitles``)."""

    job_changed_last_view_date: Optional[Date] = Field(default=UNSET, alias="jobChangedLastViewDate")
    """Refinement-only — must be paired with a base filter."""

    education: Optional[Education] = UNSET
    """Refinement-only — must be paired with a base filter."""

    score: Optional[Score] = UNSET
    """Refinement-only — must be paired with a base filter. Raw 0–100 contact score. Distinct from the ``confidence``
    band ("A+"/"A") returned on enriched contacts, which is derived from this score (e.g. ``A+`` when score > 75)."""

    geographic_details: Optional[list[GeographicDetail]] = Field(default=UNSET, alias="geographicDetails")


class V3ContactFilterCriteriaDict(TypedDict):
    names: NotRequired[list[str]]
    job_titles: NotRequired[list[str]]
    job_titles_exact_match: NotRequired[list[str]]
    normalized_job_titles: NotRequired[list[str]]
    search_text: NotRequired[str]
    countries: NotRequired[list[str]]
    locations: NotRequired[list[V3LocationDict]]
    seniority_ids: NotRequired[list[int]]
    departments: NotRequired[list[str]]
    linkedin_urls: NotRequired[list[str]]
    existing_data_points: NotRequired[list[str]]
    signals: NotRequired[SignalsDict]
    emails: NotRequired[list[EmailStr]]
    previous_emails: NotRequired[list[EmailStr]]
    previous_job_title: NotRequired[list[str]]
    skills: NotRequired[list[str]]
    certifications: NotRequired[list[str]]
    awards: NotRequired[list[str]]
    ids: NotRequired[list[str]]
    existing_data_points_condition: NotRequired[ExistingDataPointsConditionOrStr]
    job_changed_after_date: NotRequired[Date]
    job_changed_last_view_date: NotRequired[Date]
    education: NotRequired[EducationDict]
    score: NotRequired[ScoreDict]
    geographic_details: NotRequired[list[GeographicDetailDict]]
