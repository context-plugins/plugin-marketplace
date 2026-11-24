from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Meta(SdkBaseModel):
    count: Optional[int] = UNSET
    include_units: Optional[str] = UNSET


class MetaDict(TypedDict):
    count: NotRequired[int]
    include_units: NotRequired[str]
