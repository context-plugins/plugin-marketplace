from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .snippet6 import Snippet6, Snippet6Dict


class Item4BundleSocialMiscApi(SdkBaseModel):
    kind: Optional[str] = UNSET
    etag: Optional[str] = UNSET
    id: Optional[str] = UNSET
    snippet: Optional[Snippet6] = UNSET


class Item4BundleSocialMiscApiDict(TypedDict):
    kind: NotRequired[str]
    etag: NotRequired[str]
    id: NotRequired[str]
    snippet: NotRequired[Snippet6Dict]
