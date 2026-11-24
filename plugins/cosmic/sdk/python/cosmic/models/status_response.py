from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StatusResponse(SdkBaseModel):
    message: Optional[str] = UNSET
    region: Optional[str] = UNSET
    """The AWS region that served the request."""


class StatusResponseDict(TypedDict):
    message: NotRequired[str]
    region: NotRequired[str]
