from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PeopleFilters(SdkBaseModel):
    """Person-based filters."""

    job_titles: Optional[list[str]] = Field(default=UNSET, alias="jobTitles")
    """Job titles to match. Titles are expanded automatically with bidirectional acronym and semantic matching."""

    seniorities: Optional[list[str]] = UNSET
    departments: Optional[list[str]] = UNSET
    countries: Optional[list[str]] = UNSET


class PeopleFiltersDict(TypedDict):
    job_titles: NotRequired[list[str]]
    seniorities: NotRequired[list[str]]
    departments: NotRequired[list[str]]
    countries: NotRequired[list[str]]
