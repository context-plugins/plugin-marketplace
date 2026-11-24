from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Indices(SdkBaseModel):
    count: Optional[int] = UNSET
    limit: Optional[int] = UNSET


class IndicesDict(TypedDict):
    count: NotRequired[int]
    limit: NotRequired[int]
