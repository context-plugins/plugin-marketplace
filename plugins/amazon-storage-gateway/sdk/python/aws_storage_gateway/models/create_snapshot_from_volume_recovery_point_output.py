from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateSnapshotFromVolumeRecoveryPointOutput(SdkBaseModel):
    snapshot_id: Optional[str] = Field(default=UNSET, alias="SnapshotId")
    """The ID of the snapshot."""

    volume_arn: Optional[str] = Field(default=UNSET, alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return
    to retrieve the TargetARN for specified VolumeARN."""

    volume_recovery_point_time: Optional[str] = Field(default=UNSET, alias="VolumeRecoveryPointTime")
    """The time the volume was created from the recovery point."""


class CreateSnapshotFromVolumeRecoveryPointOutputDict(TypedDict):
    snapshot_id: NotRequired[str]
    volume_arn: NotRequired[str]
    volume_recovery_point_time: NotRequired[str]
