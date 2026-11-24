from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EmployeeCount(SdkBaseModel):
    exact: Optional[int] = UNSET
    min: Optional[int] = UNSET
    max: Optional[int] = UNSET


class EmployeeCountDict(TypedDict):
    exact: NotRequired[int]
    min: NotRequired[int]
    max: NotRequired[int]
