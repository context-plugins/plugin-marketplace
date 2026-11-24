from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Link(SdkBaseModel):
    relation: Optional[str] = UNSET
    url: Optional[str] = UNSET


class LinkDict(TypedDict):
    relation: NotRequired[str]
    url: NotRequired[str]
