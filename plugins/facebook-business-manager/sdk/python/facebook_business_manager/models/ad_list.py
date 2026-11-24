from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ad import Ad, AdDict
from .paging import Paging, PagingDict


class AdList(SdkBaseModel):
    data: Optional[list[Ad]] = UNSET
    paging: Optional[Paging] = UNSET


class AdListDict(TypedDict):
    data: NotRequired[list[AdDict]]
    paging: NotRequired[PagingDict]
