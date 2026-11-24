from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SetSmbGuestPasswordInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    """The Amazon Resource Name (ARN) of the S3 File Gateway the SMB file share is associated with."""

    password: str = Field(alias="Password")
    """The password that you want to set for your SMB server."""


class SetSmbGuestPasswordInputDict(TypedDict):
    gateway_arn: str
    password: str
