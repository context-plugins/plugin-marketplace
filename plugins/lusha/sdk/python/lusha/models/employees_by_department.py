from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EmployeesByDepartment(SdkBaseModel):
    department: Optional[str] = UNSET
    """Department name"""

    count: Optional[int] = UNSET
    """Number of employees in this department"""


class EmployeesByDepartmentDict(TypedDict):
    department: NotRequired[str]
    count: NotRequired[int]
