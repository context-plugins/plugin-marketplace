from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Employee(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET


class EmployeeDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
