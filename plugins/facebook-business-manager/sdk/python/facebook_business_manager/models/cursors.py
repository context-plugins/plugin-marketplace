from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Cursors(SdkBaseModel):
    before: Optional[str] = UNSET
    after: Optional[str] = UNSET


class CursorsDict(TypedDict):
    before: NotRequired[str]
    after: NotRequired[str]
