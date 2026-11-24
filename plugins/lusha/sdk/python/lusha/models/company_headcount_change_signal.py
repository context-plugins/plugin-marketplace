from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class CompanyHeadcountChangeSignal(SdkBaseModel):
    company_id: Optional[str] = Field(default=UNSET, alias="companyId")
    signal_id: Optional[str] = Field(default=UNSET, alias="signalId")
    signal_date: Optional[Date] = Field(default=UNSET, alias="signalDate")
    baseline_employees_count: Optional[float] = Field(default=UNSET, alias="baselineEmployeesCount")
    new_employees_count: Optional[float] = Field(default=UNSET, alias="newEmployeesCount")
    change_rate_percent: Optional[float] = Field(default=UNSET, alias="changeRatePercent")
    company_name: Optional[str] = Field(default=UNSET, alias="companyName")
    domain: Optional[str] = UNSET


class CompanyHeadcountChangeSignalDict(TypedDict):
    company_id: NotRequired[str]
    signal_id: NotRequired[str]
    signal_date: NotRequired[Date]
    baseline_employees_count: NotRequired[float]
    new_employees_count: NotRequired[float]
    change_rate_percent: NotRequired[float]
    company_name: NotRequired[str]
    domain: NotRequired[str]
