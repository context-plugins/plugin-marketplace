from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EmployeeCountLushaLookalikesApi(SdkBaseModel):
    exact: Optional[int] = UNSET


class EmployeeCountLushaLookalikesApiDict(TypedDict):
    exact: NotRequired[int]
