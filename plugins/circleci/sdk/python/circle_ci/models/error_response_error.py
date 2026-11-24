from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponseError(SdkBaseModel):
    message: Optional[str] = UNSET
    """A human-readable error message"""


class ErrorResponseErrorDict(TypedDict):
    message: NotRequired[str]
