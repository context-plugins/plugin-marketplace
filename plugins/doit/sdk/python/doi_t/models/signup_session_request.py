from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SignupSessionRequest(SdkBaseModel):
    activation_token: str = Field(alias="activationToken")
    """The one-time token returned by verifySignupRequest."""


class SignupSessionRequestDict(TypedDict):
    activation_token: str
