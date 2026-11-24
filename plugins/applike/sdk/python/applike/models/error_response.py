from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorResponse(SdkBaseModel):
    error: str
    """description of the error"""


class ErrorResponseDict(TypedDict):
    error: str
