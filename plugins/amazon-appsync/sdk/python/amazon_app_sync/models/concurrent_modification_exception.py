from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConcurrentModificationException(SdkBaseModel):
    message: Optional[str] = UNSET


class ConcurrentModificationExceptionDict(TypedDict):
    message: NotRequired[str]
