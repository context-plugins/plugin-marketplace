from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class DescribeAvailabilityMonitorTestOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    status: Optional[StatusOrStr] = Field(default=UNSET, alias="Status")
    """The status of the high availability monitoring test. If a test hasn't been performed, the value of this field is
    null."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The time the high availability monitoring test was started. If a test hasn't been performed, the value of this
    field is null."""


class DescribeAvailabilityMonitorTestOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    status: NotRequired[StatusOrStr]
    start_time: NotRequired[RFC3339DateTime]
