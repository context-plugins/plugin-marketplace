from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeStorediScsiVolumesInput(SdkBaseModel):
    volume_arns: list[str] = Field(alias="VolumeARNs")
    """An array of strings where each string represents the Amazon Resource Name (ARN) of a stored volume. All of the
    specified stored volumes must be from the same gateway. Use ListVolumes to get volume ARNs for a gateway."""


class DescribeStorediScsiVolumesInputDict(TypedDict):
    volume_arns: list[str]
