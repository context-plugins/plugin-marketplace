from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict


class ErrorResponse(SdkBaseModel):
    error: Optional[Error] = UNSET


class ErrorResponseDict(TypedDict):
    error: NotRequired[ErrorDict]
