from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorDetail(SdkBaseModel):
    message: Optional[str] = UNSET
    """The error payload."""


class ErrorDetailDict(TypedDict):
    message: NotRequired[str]
