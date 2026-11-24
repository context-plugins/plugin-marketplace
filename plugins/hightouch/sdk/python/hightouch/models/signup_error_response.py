from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SignupErrorResponse(SdkBaseModel):
    message: str
    code: str


class SignupErrorResponseDict(TypedDict):
    message: str
    code: str
