from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_audience import CustomAudience, CustomAudienceDict
from .paging import Paging, PagingDict


class CustomAudienceList(SdkBaseModel):
    data: Optional[list[CustomAudience]] = UNSET
    paging: Optional[Paging] = UNSET


class CustomAudienceListDict(TypedDict):
    data: NotRequired[list[CustomAudienceDict]]
    paging: NotRequired[PagingDict]
