from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteVolumeInput(SdkBaseModel):
    volume_arn: str = Field(alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway
    volumes."""


class DeleteVolumeInputDict(TypedDict):
    volume_arn: str
