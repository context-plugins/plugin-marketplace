from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateGatewayInformationOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    gateway_name: Optional[str] = Field(default=UNSET, alias="GatewayName")
    """The name you configured for your gateway."""


class UpdateGatewayInformationOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    gateway_name: NotRequired[str]
