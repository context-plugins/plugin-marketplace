from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SetLocalConsolePasswordInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    local_console_password: str = Field(alias="LocalConsolePassword")
    """The password you want to set for your VM local console."""


class SetLocalConsolePasswordInputDict(TypedDict):
    gateway_arn: str
    local_console_password: str
