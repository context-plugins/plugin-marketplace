from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Request(SdkBaseModel):
    message: Optional[str] = UNSET
    """Updated post message text"""


class RequestDict(TypedDict):
    message: NotRequired[str]
