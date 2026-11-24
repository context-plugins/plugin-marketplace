from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PageGroup(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET


class PageGroupDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
