from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Response(SdkBaseModel):
    current_user_url: Optional[str] = UNSET
    accounts_url: Optional[str] = UNSET
    api_version: Optional[str] = UNSET


class ResponseDict(TypedDict):
    current_user_url: NotRequired[str]
    accounts_url: NotRequired[str]
    api_version: NotRequired[str]
