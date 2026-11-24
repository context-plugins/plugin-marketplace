from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Education(SdkBaseModel):
    """Refinement-only — must be paired with a base filter."""

    degrees: Optional[list[str]] = UNSET
    fields_of_study: Optional[list[str]] = Field(default=UNSET, alias="fieldsOfStudy")
    schools: Optional[list[str]] = UNSET
    start_year_gte: Optional[int] = Field(default=UNSET, alias="startYearGte")
    graduation_year_lte: Optional[int] = Field(default=UNSET, alias="graduationYearLte")


class EducationDict(TypedDict):
    degrees: NotRequired[list[str]]
    fields_of_study: NotRequired[list[str]]
    schools: NotRequired[list[str]]
    start_year_gte: NotRequired[int]
    graduation_year_lte: NotRequired[int]
