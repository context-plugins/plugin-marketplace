from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vtl_device import VtlDevice, VtlDeviceDict


class DescribeVtlDevicesOutput(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    vtl_devices: Optional[list[VtlDevice]] = Field(default=UNSET, alias="VTLDevices")
    """An array of VTL device objects composed of the Amazon Resource Name (ARN) of the VTL devices."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """An opaque string that indicates the position at which the VTL devices that were fetched for description ended.
    Use the marker in your next request to fetch the next set of VTL devices in the list. If there are no more VTL
    devices to describe, this field does not appear in the response."""


class DescribeVtlDevicesOutputDict(TypedDict):
    gateway_arn: NotRequired[str]
    vtl_devices: NotRequired[list[VtlDeviceDict]]
    marker: NotRequired[str]
