from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CountItem(SdkBaseModel):
    ts: Optional[str] = UNSET
    count: Optional[int] = UNSET


class CountItemDict(TypedDict):
    ts: NotRequired[str]
    count: NotRequired[int]
