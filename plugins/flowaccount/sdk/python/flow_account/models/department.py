from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .company import Company, CompanyDict
from .employee import Employee, EmployeeDict


class Department(SdkBaseModel):
    id: Optional[int] = UNSET
    name: str
    code: OptionalNullable[str] = UNSET
    is_delete: bool = Field(default=False, alias="isDelete")
    company_id: Optional[int] = Field(default=UNSET, alias="companyId")
    created_by: Optional[int] = Field(default=UNSET, alias="createdBy")
    modified_by: Optional[int] = Field(default=UNSET, alias="modifiedBy")
    created_on: Optional[Date] = Field(default=UNSET, alias="createdOn")
    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    company: Optional[Company] = UNSET
    employees: OptionalNullable[list[Employee]] = UNSET


class DepartmentDict(TypedDict):
    id: NotRequired[int]
    name: str
    code: NotRequired[str | None]
    is_delete: NotRequired[bool]
    company_id: NotRequired[int]
    created_by: NotRequired[int]
    modified_by: NotRequired[int]
    created_on: NotRequired[Date]
    modified_on: NotRequired[RFC3339DateTime]
    company: NotRequired[CompanyDict]
    employees: NotRequired[list[EmployeeDict] | None]
