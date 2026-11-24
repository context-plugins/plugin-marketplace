from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StartGatewayInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")


class StartGatewayInputDict(TypedDict):
    gateway_arn: str
