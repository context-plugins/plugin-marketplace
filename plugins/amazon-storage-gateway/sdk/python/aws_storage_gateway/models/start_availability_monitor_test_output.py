from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartAvailabilityMonitorTestOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")


class StartAvailabilityMonitorTestOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
