from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .unions.date_month import DateMonth, DateMonthDict
from .unions.date_year import DateYear, DateYearDict
from .unions.expire_date_month import ExpireDateMonth, ExpireDateMonthDict
from .unions.expire_date_year import ExpireDateYear, ExpireDateYearDict


class LinkedinCertification(SdkBaseModel):
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    credential_id: Optional[str] = Field(default=UNSET, alias="credentialId")
    date_month: Optional[DateMonth] = Field(default=UNSET, alias="dateMonth")
    date_year: Optional[DateYear] = Field(default=UNSET, alias="dateYear")
    expire_date_month: Optional[ExpireDateMonth] = Field(default=UNSET, alias="expireDateMonth")
    expire_date_year: Optional[ExpireDateYear] = Field(default=UNSET, alias="expireDateYear")
    linkedin_company_id: OptionalNullable[int] = Field(default=UNSET, alias="linkedinCompanyId")
    summary: OptionalNullable[str] = UNSET
    title: Optional[str] = UNSET
    verify_url: OptionalNullable[str] = Field(default=UNSET, alias="verifyUrl")


class LinkedinCertificationDict(TypedDict):
    company_id: NotRequired[int]
    company_name: NotRequired[str]
    credential_id: NotRequired[str]
    date_month: NotRequired[DateMonthDict]
    date_year: NotRequired[DateYearDict]
    expire_date_month: NotRequired[ExpireDateMonthDict]
    expire_date_year: NotRequired[ExpireDateYearDict]
    linkedin_company_id: NotRequired[int | None]
    summary: NotRequired[str | None]
    title: NotRequired[str]
    verify_url: NotRequired[str | None]
