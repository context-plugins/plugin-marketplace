from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VolumeRecoveryPointInfo(SdkBaseModel):
    volume_arn: Optional[str] = Field(default=UNSET, alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the volume target."""

    volume_size_in_bytes: Optional[int] = Field(default=UNSET, alias="VolumeSizeInBytes")
    """The size of the volume in bytes."""

    volume_usage_in_bytes: Optional[int] = Field(default=UNSET, alias="VolumeUsageInBytes")
    """The size of the data stored on the volume in bytes. This value is not available for volumes created prior to May
    13, 2015, until you store data on the volume."""

    volume_recovery_point_time: Optional[str] = Field(default=UNSET, alias="VolumeRecoveryPointTime")
    """The time the recovery point was taken."""


class VolumeRecoveryPointInfoDict(TypedDict):
    volume_arn: NotRequired[str]
    volume_size_in_bytes: NotRequired[int]
    volume_usage_in_bytes: NotRequired[int]
    volume_recovery_point_time: NotRequired[str]
