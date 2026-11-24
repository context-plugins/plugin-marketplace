from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BadGatewayException(SdkBaseModel):
    message: str


class BadGatewayExceptionDict(TypedDict):
    message: str
