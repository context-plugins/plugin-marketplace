from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidMessageContentsError(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidMessageContentsErrorDict(TypedDict):
    message: NotRequired[str]
