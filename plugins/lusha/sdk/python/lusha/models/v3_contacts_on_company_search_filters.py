from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v3_location import V3Location, V3LocationDict


class V3ContactsOnCompanySearchFilters(SdkBaseModel):
    """Restricted contact-attribute filters usable within a company prospecting request."""

    job_titles: Optional[list[str]] = Field(default=UNSET, alias="jobTitles")
    departments: Optional[list[str]] = UNSET
    seniority_ids: Optional[list[int]] = Field(default=UNSET, alias="seniorityIds")
    skills: Optional[list[str]] = UNSET
    locations: Optional[list[V3Location]] = UNSET
    existing_data_points: Optional[list[str]] = Field(default=UNSET, alias="existingDataPoints")


class V3ContactsOnCompanySearchFiltersDict(TypedDict):
    job_titles: NotRequired[list[str]]
    departments: NotRequired[list[str]]
    seniority_ids: NotRequired[list[int]]
    skills: NotRequired[list[str]]
    locations: NotRequired[list[V3LocationDict]]
    existing_data_points: NotRequired[list[str]]
