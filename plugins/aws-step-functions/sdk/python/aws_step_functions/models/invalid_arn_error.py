from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidArnError(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidArnErrorDict(TypedDict):
    message: NotRequired[str]
