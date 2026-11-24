from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ad_creative import AdCreative, AdCreativeDict
from .paging import Paging, PagingDict


class AdCreativeList(SdkBaseModel):
    data: Optional[list[AdCreative]] = UNSET
    paging: Optional[Paging] = UNSET


class AdCreativeListDict(TypedDict):
    data: NotRequired[list[AdCreativeDict]]
    paging: NotRequired[PagingDict]
