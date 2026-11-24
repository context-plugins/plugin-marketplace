from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Meta1(SdkBaseModel):
    count: Optional[int] = UNSET
    total: OptionalNullable[int] = UNSET
    limit: Optional[int] = UNSET
    offset: Optional[int] = UNSET
    has_more: Optional[bool] = UNSET


class Meta1Dict(TypedDict):
    count: NotRequired[int]
    total: NotRequired[int | None]
    limit: NotRequired[int]
    offset: NotRequired[int]
    has_more: NotRequired[bool]
