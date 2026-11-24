from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_code import StatusCodeOrStr


class ResponseInstagramGraphPublishingApi(SdkBaseModel):
    id: Optional[str] = UNSET
    status_code: Optional[StatusCodeOrStr] = UNSET


class ResponseInstagramGraphPublishingApiDict(TypedDict):
    id: NotRequired[str]
    status_code: NotRequired[StatusCodeOrStr]
