from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cursors import Cursors, CursorsDict


class PagingFacebookBusinessManagerFacebookPagesCommentsApi(SdkBaseModel):
    cursors: Optional[Cursors] = UNSET
    next: Optional[str] = UNSET
    previous: Optional[str] = UNSET


class PagingFacebookBusinessManagerFacebookPagesCommentsApiDict(TypedDict):
    cursors: NotRequired[CursorsDict]
    next: NotRequired[str]
    previous: NotRequired[str]
