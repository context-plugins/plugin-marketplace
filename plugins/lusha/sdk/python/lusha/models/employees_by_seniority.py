from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EmployeesBySeniority(SdkBaseModel):
    seniority: Optional[str] = UNSET
    """Seniority level"""

    count: Optional[int] = UNSET
    """Number of employees at this seniority level"""


class EmployeesBySeniorityDict(TypedDict):
    seniority: NotRequired[str]
    count: NotRequired[int]
