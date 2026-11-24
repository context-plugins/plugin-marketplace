from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RequestInstagramGraphMediaApi(SdkBaseModel):
    comment_enabled: Optional[bool] = UNSET
    access_token: Optional[str] = UNSET


class RequestInstagramGraphMediaApiDict(TypedDict):
    comment_enabled: NotRequired[bool]
    access_token: NotRequired[str]
