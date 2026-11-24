from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RetrieveTapeRecoveryPointInput(SdkBaseModel):
    tape_arn: str = Field(alias="TapeARN")
    """The Amazon Resource Name (ARN) of the virtual tape for which you want to retrieve the recovery point."""

    gateway_arn: str = Field(alias="GatewayARN")


class RetrieveTapeRecoveryPointInputDict(TypedDict):
    tape_arn: str
    gateway_arn: str
