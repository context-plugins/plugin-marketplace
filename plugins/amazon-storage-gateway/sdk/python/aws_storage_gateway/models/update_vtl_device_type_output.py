from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateVtlDeviceTypeOutput(SdkBaseModel):
    vtl_device_arn: Optional[str] = Field(default=UNSET, alias="VTLDeviceARN")
    """The Amazon Resource Name (ARN) of the medium changer you have selected."""


class UpdateVtlDeviceTypeOutputDict(TypedDict):
    vtl_device_arn: NotRequired[str]
