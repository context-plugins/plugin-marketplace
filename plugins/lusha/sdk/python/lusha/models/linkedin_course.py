from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .field_of_study import FieldOfStudy, FieldOfStudyDict
from .school import School, SchoolDict
from .unions.end_date_month import EndDateMonth, EndDateMonthDict
from .unions.end_date_year import EndDateYear, EndDateYearDict
from .unions.start_date_month import StartDateMonth, StartDateMonthDict
from .unions.start_date_year import StartDateYear, StartDateYearDict


class LinkedinCourse(SdkBaseModel):
    activities: OptionalNullable[str] = UNSET
    degree: OptionalNullable[str] = UNSET
    end_date_month: Optional[EndDateMonth] = Field(default=UNSET, alias="endDateMonth")
    end_date_year: Optional[EndDateYear] = Field(default=UNSET, alias="endDateYear")
    field_of_study: OptionalNullable[FieldOfStudy] = Field(default=UNSET, alias="fieldOfStudy")
    grade: OptionalNullable[str] = UNSET
    school: OptionalNullable[School] = UNSET
    start_date_month: Optional[StartDateMonth] = Field(default=UNSET, alias="startDateMonth")
    start_date_year: Optional[StartDateYear] = Field(default=UNSET, alias="startDateYear")
    linkedin_school_id: OptionalNullable[float] = Field(default=UNSET, alias="linkedinSchoolId")


class LinkedinCourseDict(TypedDict):
    activities: NotRequired[str | None]
    degree: NotRequired[str | None]
    end_date_month: NotRequired[EndDateMonthDict]
    end_date_year: NotRequired[EndDateYearDict]
    field_of_study: NotRequired[FieldOfStudyDict | None]
    grade: NotRequired[str | None]
    school: NotRequired[SchoolDict | None]
    start_date_month: NotRequired[StartDateMonthDict]
    start_date_year: NotRequired[StartDateYearDict]
    linkedin_school_id: NotRequired[float | None]
