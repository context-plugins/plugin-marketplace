from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CancelArchivalInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    tape_arn: str = Field(alias="TapeARN")
    """The Amazon Resource Name (ARN) of the virtual tape you want to cancel archiving for."""


class CancelArchivalInputDict(TypedDict):
    gateway_arn: str
    tape_arn: str
