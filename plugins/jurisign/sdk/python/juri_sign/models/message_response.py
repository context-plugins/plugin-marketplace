from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MessageResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class MessageResponseDict(TypedDict):
    message: NotRequired[str]
