from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_dynamics365_business_central_api_v20_employees_api import (
    StatusDynamics365BusinessCentralApiV20EmployeesApiOrStr,
)


class Employee(SdkBaseModel):
    id: Optional[UUID] = UNSET
    number: Optional[str] = UNSET
    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    given_name: Optional[str] = Field(default=UNSET, alias="givenName")
    middle_name: Optional[str] = Field(default=UNSET, alias="middleName")
    surname: Optional[str] = UNSET
    job_title: Optional[str] = Field(default=UNSET, alias="jobTitle")
    address_line1: Optional[str] = Field(default=UNSET, alias="addressLine1")
    address_line2: Optional[str] = Field(default=UNSET, alias="addressLine2")
    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    country: Optional[str] = UNSET
    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    mobile_phone: Optional[str] = Field(default=UNSET, alias="mobilePhone")
    email: Optional[str] = UNSET
    personal_email: Optional[str] = Field(default=UNSET, alias="personalEmail")
    employment_date: Optional[Date] = Field(default=UNSET, alias="employmentDate")
    termination_date: Optional[Date] = Field(default=UNSET, alias="terminationDate")
    status: Optional[StatusDynamics365BusinessCentralApiV20EmployeesApiOrStr] = UNSET
    birth_date: Optional[Date] = Field(default=UNSET, alias="birthDate")
    statistics_group_code: Optional[str] = Field(default=UNSET, alias="statisticsGroupCode")
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")


class EmployeeDict(TypedDict):
    id: NotRequired[UUID]
    number: NotRequired[str]
    display_name: NotRequired[str]
    given_name: NotRequired[str]
    middle_name: NotRequired[str]
    surname: NotRequired[str]
    job_title: NotRequired[str]
    address_line1: NotRequired[str]
    address_line2: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    postal_code: NotRequired[str]
    phone_number: NotRequired[str]
    mobile_phone: NotRequired[str]
    email: NotRequired[str]
    personal_email: NotRequired[str]
    employment_date: NotRequired[Date]
    termination_date: NotRequired[Date]
    status: NotRequired[StatusDynamics365BusinessCentralApiV20EmployeesApiOrStr]
    birth_date: NotRequired[Date]
    statistics_group_code: NotRequired[str]
    last_modified_date_time: NotRequired[RFC3339DateTime]
