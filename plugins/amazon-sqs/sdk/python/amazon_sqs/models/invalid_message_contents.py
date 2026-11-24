from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidMessageContents(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidMessageContentsDict(TypedDict):
    message: NotRequired[str]
