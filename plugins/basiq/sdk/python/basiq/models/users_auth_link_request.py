from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UsersAuthLinkRequest(SdkBaseModel):
    mobile: Optional[str] = UNSET


class UsersAuthLinkRequestDict(TypedDict):
    mobile: NotRequired[str]
