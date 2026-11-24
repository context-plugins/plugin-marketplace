from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .unions.date_day import DateDay, DateDayDict
from .unions.date_month1 import DateMonth1, DateMonth1Dict
from .unions.date_year1 import DateYear1, DateYear1Dict


class LinkedinAward(SdkBaseModel):
    company_name: OptionalNullable[str] = Field(default=UNSET, alias="companyName")
    date_day: Optional[DateDay] = Field(default=UNSET, alias="dateDay")
    date_month: Optional[DateMonth1] = Field(default=UNSET, alias="dateMonth")
    date_year: Optional[DateYear1] = Field(default=UNSET, alias="dateYear")
    linkedin_company_id: OptionalNullable[str] = Field(default=UNSET, alias="linkedinCompanyId")
    summary: OptionalNullable[str] = UNSET
    title: Optional[str] = UNSET


class LinkedinAwardDict(TypedDict):
    company_name: NotRequired[str | None]
    date_day: NotRequired[DateDayDict]
    date_month: NotRequired[DateMonth1Dict]
    date_year: NotRequired[DateYear1Dict]
    linkedin_company_id: NotRequired[str | None]
    summary: NotRequired[str | None]
    title: NotRequired[str]
