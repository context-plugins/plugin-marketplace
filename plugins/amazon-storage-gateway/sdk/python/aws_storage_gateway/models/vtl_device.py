from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .devicei_scsi_attributes import DeviceiScsiAttributes, DeviceiScsiAttributesDict


class VtlDevice(SdkBaseModel):
    vtl_device_arn: Optional[str] = Field(default=UNSET, alias="VTLDeviceARN")
    """Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media changer)."""

    vtl_device_type: Optional[str] = Field(default=UNSET, alias="VTLDeviceType")
    """Specifies the type of device that the VTL device emulates."""

    vtl_device_vendor: Optional[str] = Field(default=UNSET, alias="VTLDeviceVendor")
    """Specifies the vendor of the device that the VTL device object emulates."""

    vtl_device_product_identifier: Optional[str] = Field(default=UNSET, alias="VTLDeviceProductIdentifier")
    """Specifies the model number of device that the VTL device emulates."""

    devicei_scsi_attributes: Optional[DeviceiScsiAttributes] = Field(default=UNSET, alias="DeviceiSCSIAttributes")


class VtlDeviceDict(TypedDict):
    vtl_device_arn: NotRequired[str]
    vtl_device_type: NotRequired[str]
    vtl_device_vendor: NotRequired[str]
    vtl_device_product_identifier: NotRequired[str]
    devicei_scsi_attributes: NotRequired[DeviceiScsiAttributesDict]
