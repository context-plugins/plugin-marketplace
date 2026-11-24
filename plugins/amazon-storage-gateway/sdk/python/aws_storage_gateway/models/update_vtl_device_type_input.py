from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateVtlDeviceTypeInput(SdkBaseModel):
    vtl_device_arn: str = Field(alias="VTLDeviceARN")
    """The Amazon Resource Name (ARN) of the medium changer you want to select."""

    device_type: str = Field(alias="DeviceType")
    """The type of medium changer you want to select. Valid Values: STK-L700 | AWS-Gateway-VTL | IBM-03584L32-0402"""


class UpdateVtlDeviceTypeInputDict(TypedDict):
    vtl_device_arn: str
    device_type: str
