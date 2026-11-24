from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class CreateSnapshotFromVolumeRecoveryPointInput(SdkBaseModel):
    volume_arn: str = Field(alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the iSCSI volume target. Use the DescribeStorediSCSIVolumes operation to return
    to retrieve the TargetARN for specified VolumeARN."""

    snapshot_description: str = Field(alias="SnapshotDescription")
    """Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store snapshots panel
    in the Description field, and in the Storage Gateway snapshot Details pane, Description field."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair. Valid characters for
    key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters:
    + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is
    256."""


class CreateSnapshotFromVolumeRecoveryPointInputDict(TypedDict):
    volume_arn: str
    snapshot_description: str
    tags: NotRequired[list[TagModelDict]]
