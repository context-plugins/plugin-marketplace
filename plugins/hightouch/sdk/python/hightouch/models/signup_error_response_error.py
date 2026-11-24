from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SignupErrorResponseError(SdkBaseModel):
    message: str
    code: str


class SignupErrorResponseErrorDict(TypedDict):
    message: str
    code: str
