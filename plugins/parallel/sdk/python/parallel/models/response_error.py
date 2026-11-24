from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResponseError(SdkBaseModel):
    """Details of a failed response."""

    code: Literal["server_error"] = "server_error"
    """Error code; currently always "server_error"."""

    message: str


class ResponseErrorDict(TypedDict):
    code: Literal["server_error"]
    message: str
