from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .snippet5 import Snippet5, Snippet5Dict


class Item3BundleSocialMiscApi(SdkBaseModel):
    kind: Optional[str] = UNSET
    etag: Optional[str] = UNSET
    id: Optional[str] = UNSET
    snippet: Optional[Snippet5] = UNSET


class Item3BundleSocialMiscApiDict(TypedDict):
    kind: NotRequired[str]
    etag: NotRequired[str]
    id: NotRequired[str]
    snippet: NotRequired[Snippet5Dict]
