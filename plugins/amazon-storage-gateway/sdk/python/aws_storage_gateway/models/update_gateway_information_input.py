from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.gateway_capacity1 import GatewayCapacity1OrStr


class UpdateGatewayInformationInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    gateway_name: Optional[str] = Field(default=UNSET, alias="GatewayName")
    gateway_timezone: Optional[str] = Field(default=UNSET, alias="GatewayTimezone")
    """A value that indicates the time zone of the gateway."""

    cloud_watch_log_group_arn: Optional[str] = Field(default=UNSET, alias="CloudWatchLogGroupARN")
    """The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that you want to use to monitor and log events
    in the gateway. For more information, see What is Amazon CloudWatch Logs?"""

    gateway_capacity: Optional[GatewayCapacity1OrStr] = Field(default=UNSET, alias="GatewayCapacity")
    """Specifies the size of the gateway's metadata cache. This setting impacts gateway performance and hardware
    recommendations. For more information, see Performance guidance for gateways with multiple file shares in the Amazon
    S3 File Gateway User Guide."""


class UpdateGatewayInformationInputDict(TypedDict):
    gateway_arn: str
    gateway_name: NotRequired[str]
    gateway_timezone: NotRequired[str]
    cloud_watch_log_group_arn: NotRequired[str]
    gateway_capacity: NotRequired[GatewayCapacity1OrStr]
