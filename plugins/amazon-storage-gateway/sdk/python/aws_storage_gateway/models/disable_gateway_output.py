from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DisableGatewayOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    """The unique Amazon Resource Name (ARN) of the disabled gateway."""


class DisableGatewayOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
