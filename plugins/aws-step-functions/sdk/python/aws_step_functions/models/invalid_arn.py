from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidArn(SdkBaseModel):
    message: Optional[str] = UNSET


class InvalidArnDict(TypedDict):
    message: NotRequired[str]
