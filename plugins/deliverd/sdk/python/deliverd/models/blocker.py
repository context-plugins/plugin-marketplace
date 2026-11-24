from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Blocker(SdkBaseModel):
    kind: str
    message: str
    id: Optional[str] = UNSET


class BlockerDict(TypedDict):
    kind: str
    message: str
    id: NotRequired[str]
