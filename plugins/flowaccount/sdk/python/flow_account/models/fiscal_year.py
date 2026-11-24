from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .company import Company, CompanyDict
from .enums.fiscal_year_status import FiscalYearStatusOrInt


class FiscalYear(SdkBaseModel):
    id: Optional[int] = UNSET
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    begin_period: Optional[RFC3339DateTime] = Field(default=UNSET, alias="beginPeriod")
    end_period: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endPeriod")
    status: Optional[FiscalYearStatusOrInt] = UNSET
    """1 = Current 3 = Opening 5 = Closed"""

    closed_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="closedOn")
    closed_by: OptionalNullable[int] = Field(default=UNSET, alias="closedBy")
    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    company: Optional[Company] = UNSET


class FiscalYearDict(TypedDict):
    id: NotRequired[int]
    company_id: NotRequired[int]
    begin_period: NotRequired[RFC3339DateTime]
    end_period: NotRequired[RFC3339DateTime]
    status: NotRequired[FiscalYearStatusOrInt]
    closed_on: NotRequired[RFC3339DateTime | None]
    closed_by: NotRequired[int | None]
    created_on: NotRequired[RFC3339DateTime]
    company: NotRequired[CompanyDict]
