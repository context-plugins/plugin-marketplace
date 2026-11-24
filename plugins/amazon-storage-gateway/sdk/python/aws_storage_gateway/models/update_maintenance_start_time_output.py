from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateMaintenanceStartTimeOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")


class UpdateMaintenanceStartTimeOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
