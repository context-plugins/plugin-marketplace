from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateSnapshotOutput(SdkBaseModel):
    volume_arn: Optional[str] = Field(default=UNSET, alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the volume of which the snapshot was taken."""

    snapshot_id: Optional[str] = Field(default=UNSET, alias="SnapshotId")
    """The snapshot ID that is used to refer to the snapshot in future operations such as describing snapshots (Amazon
    Elastic Compute Cloud API DescribeSnapshots) or creating a volume from a snapshot (CreateStorediSCSIVolume)."""


class CreateSnapshotOutputDict(TypedDict):
    volume_arn: NotRequired[str]
    snapshot_id: NotRequired[str]
