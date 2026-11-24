from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BootstrapSendOtpResponse(SdkBaseModel):
    sent: bool
    """Always true. Says nothing about whether the account existed."""

    email: EmailStr
    """The normalized (lower-cased, trimmed) address."""


class BootstrapSendOtpResponseDict(TypedDict):
    sent: bool
    email: EmailStr
