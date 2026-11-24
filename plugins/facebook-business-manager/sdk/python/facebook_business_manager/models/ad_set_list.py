from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ad_set import AdSet, AdSetDict
from .paging import Paging, PagingDict


class AdSetList(SdkBaseModel):
    data: Optional[list[AdSet]] = UNSET
    paging: Optional[Paging] = UNSET


class AdSetListDict(TypedDict):
    data: NotRequired[list[AdSetDict]]
    paging: NotRequired[PagingDict]
