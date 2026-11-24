from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UnsupportedOperationError(SdkBaseModel):
    message: Optional[str] = UNSET


class UnsupportedOperationErrorDict(TypedDict):
    message: NotRequired[str]
