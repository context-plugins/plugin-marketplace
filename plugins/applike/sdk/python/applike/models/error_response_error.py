from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorResponseError(SdkBaseModel):
    error: str
    """description of the error"""


class ErrorResponseErrorDict(TypedDict):
    error: str
