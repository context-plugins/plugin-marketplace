from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MethodLimit(SdkBaseModel):
    name: Optional[str] = UNSET
    limit: Optional[int] = UNSET
    count: Optional[int] = UNSET


class MethodLimitDict(TypedDict):
    name: NotRequired[str]
    limit: NotRequired[int]
    count: NotRequired[int]
