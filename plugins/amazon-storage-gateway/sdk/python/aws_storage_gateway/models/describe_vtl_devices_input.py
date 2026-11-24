from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeVtlDevicesInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    vtl_device_arns: Optional[list[str]] = Field(default=UNSET, alias="VTLDeviceARNs")
    """An array of strings, where each string represents the Amazon Resource Name (ARN) of a VTL device. All of the
    specified VTL devices must be from the same gateway. If no VTL devices are specified, the result will contain all
    devices on the specified gateway."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """An opaque string that indicates the position at which to begin describing the VTL devices."""

    limit: Optional[int] = Field(default=UNSET, alias="Limit")
    """Specifies that the number of VTL devices described be limited to the specified number."""


class DescribeVtlDevicesInputDict(TypedDict):
    gateway_arn: str
    vtl_device_arns: NotRequired[list[str]]
    marker: NotRequired[str]
    limit: NotRequired[int]
