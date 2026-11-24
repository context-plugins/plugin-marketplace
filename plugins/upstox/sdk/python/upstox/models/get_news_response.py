from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .news_response_meta_data import NewsResponseMetaData, NewsResponseMetaDataDict


class GetNewsResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[dict[str, Any]] = UNSET
    metadata: Optional[NewsResponseMetaData] = UNSET


class GetNewsResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[dict[str, Any]]
    metadata: NotRequired[NewsResponseMetaDataDict]
