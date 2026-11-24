from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BootstrapSendOtpRequest(SdkBaseModel):
    email: EmailStr
    """The address that will receive the code and own the account."""


class BootstrapSendOtpRequestDict(TypedDict):
    email: EmailStr
