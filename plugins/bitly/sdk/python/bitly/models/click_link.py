from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ClickLink(SdkBaseModel):
    clicks: Optional[int] = UNSET
    id: Optional[str] = UNSET


class ClickLinkDict(TypedDict):
    clicks: NotRequired[int]
    id: NotRequired[str]
