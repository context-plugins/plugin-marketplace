from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class ContactSignal(SdkBaseModel):
    person_id: Optional[str] = Field(default=UNSET, alias="personId")
    current_company_id: Optional[int] = Field(default=UNSET, alias="currentCompanyId")
    current_company_name: Optional[str] = Field(default=UNSET, alias="currentCompanyName")
    current_departments: Optional[str] = Field(default=UNSET, alias="currentDepartments")
    current_seniority_label: Optional[str] = Field(default=UNSET, alias="currentSeniorityLabel")
    current_title: Optional[str] = Field(default=UNSET, alias="currentTitle")
    signal_date: Optional[Date] = Field(default=UNSET, alias="signalDate")
    previous_company_name: Optional[str] = Field(default=UNSET, alias="previousCompanyName")
    previous_domain: Optional[str] = Field(default=UNSET, alias="previousDomain")
    current_domain: Optional[str] = Field(default=UNSET, alias="currentDomain")


class ContactSignalDict(TypedDict):
    person_id: NotRequired[str]
    current_company_id: NotRequired[int]
    current_company_name: NotRequired[str]
    current_departments: NotRequired[str]
    current_seniority_label: NotRequired[str]
    current_title: NotRequired[str]
    signal_date: NotRequired[Date]
    previous_company_name: NotRequired[str]
    previous_domain: NotRequired[str]
    current_domain: NotRequired[str]
