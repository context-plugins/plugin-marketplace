from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .employee import Employee, EmployeeDict


class CompaniesApiEmployeesResponse(SdkBaseModel):
    value: Optional[list[Employee]] = UNSET


class CompaniesApiEmployeesResponseDict(TypedDict):
    value: NotRequired[list[EmployeeDict]]
