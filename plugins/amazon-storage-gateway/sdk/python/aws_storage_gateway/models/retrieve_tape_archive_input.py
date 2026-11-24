from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RetrieveTapeArchiveInput(SdkBaseModel):
    tape_arn: str = Field(alias="TapeARN")
    """The Amazon Resource Name (ARN) of the virtual tape you want to retrieve from the virtual tape shelf (VTS)."""

    gateway_arn: str = Field(alias="GatewayARN")
    """The Amazon Resource Name (ARN) of the gateway you want to retrieve the virtual tape to. Use the ListGateways
    operation to return a list of gateways for your account and Amazon Web Services Region. You retrieve archived
    virtual tapes to only one gateway and the gateway must be a tape gateway."""


class RetrieveTapeArchiveInputDict(TypedDict):
    tape_arn: str
    gateway_arn: str
