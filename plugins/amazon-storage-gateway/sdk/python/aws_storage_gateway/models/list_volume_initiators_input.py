from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListVolumeInitiatorsInput(SdkBaseModel):
    volume_arn: str = Field(alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes
    for the gateway."""


class ListVolumeInitiatorsInputDict(TypedDict):
    volume_arn: str
