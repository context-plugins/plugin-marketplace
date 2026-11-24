from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateStorediScsiVolumeOutput(SdkBaseModel):
    volume_arn: Optional[str] = Field(default=UNSET, alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the configured volume."""

    volume_size_in_bytes: Optional[int] = Field(default=UNSET, alias="VolumeSizeInBytes")
    """The size of the volume in bytes."""

    target_arn: Optional[str] = Field(default=UNSET, alias="TargetARN")
    """The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI name that initiators can use to
    connect to the target."""


class CreateStorediScsiVolumeOutputDict(TypedDict):
    volume_arn: NotRequired[str]
    volume_size_in_bytes: NotRequired[int]
    target_arn: NotRequired[str]
