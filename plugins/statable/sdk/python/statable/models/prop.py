from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Prop(SdkBaseModel):
    key: Optional[str] = UNSET
    event: Optional[str] = UNSET
    count: Optional[int] = UNSET
    first_seen: Optional[RFC3339DateTime] = UNSET


class PropDict(TypedDict):
    key: NotRequired[str]
    event: NotRequired[str]
    count: NotRequired[int]
    first_seen: NotRequired[RFC3339DateTime]
