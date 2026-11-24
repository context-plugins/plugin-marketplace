from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datum import Datum, DatumDict
from .paging_facebook_business_manager_facebook_pages_comments_api import (
    PagingFacebookBusinessManagerFacebookPagesCommentsApi,
    PagingFacebookBusinessManagerFacebookPagesCommentsApiDict,
)


class PageInsightsResponse(SdkBaseModel):
    data: Optional[list[Datum]] = UNSET
    paging: Optional[PagingFacebookBusinessManagerFacebookPagesCommentsApi] = UNSET


class PageInsightsResponseDict(TypedDict):
    data: NotRequired[list[DatumDict]]
    paging: NotRequired[PagingFacebookBusinessManagerFacebookPagesCommentsApiDict]
