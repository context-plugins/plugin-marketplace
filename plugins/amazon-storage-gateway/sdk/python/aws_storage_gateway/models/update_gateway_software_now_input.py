from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateGatewaySoftwareNowInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")


class UpdateGatewaySoftwareNowInputDict(TypedDict):
    gateway_arn: str
