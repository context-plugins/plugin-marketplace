from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class FilterByDepartment(SdkBaseModel):
    department: str
    start_date: Optional[Date] = Field(default=UNSET, alias="startDate")


class FilterByDepartmentDict(TypedDict):
    department: str
    start_date: NotRequired[Date]
