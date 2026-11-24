from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SignupVerificationCode(SdkBaseModel):
    code: str
    """The 6-digit code from the verification email."""


class SignupVerificationCodeDict(TypedDict):
    code: str
