from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BadGatewayExceptionError(SdkBaseModel):
    message: str


class BadGatewayExceptionErrorDict(TypedDict):
    message: str
