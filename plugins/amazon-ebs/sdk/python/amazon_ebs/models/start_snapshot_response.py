from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.sse_type import SseTypeOrStr
from .enums.status import StatusOrStr
from .tag_model import TagModel, TagModelDict


class StartSnapshotResponse(SdkBaseModel):
    description: Optional[str] = Field(default=UNSET, alias="Description")
    """The description of the snapshot."""

    snapshot_id: Optional[str] = Field(default=UNSET, alias="SnapshotId")
    """The ID of the snapshot."""

    owner_id: Optional[str] = Field(default=UNSET, alias="OwnerId")
    """The Amazon Web Services account ID of the snapshot owner."""

    status: Optional[StatusOrStr] = Field(default=UNSET, alias="Status")
    """The status of the snapshot."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The timestamp when the snapshot was created."""

    volume_size: Optional[int] = Field(default=UNSET, alias="VolumeSize")
    """The size of the volume, in GiB."""

    block_size: Optional[int] = Field(default=UNSET, alias="BlockSize")
    """The size of the blocks in the snapshot, in bytes."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The tags applied to the snapshot. You can specify up to 50 tags per snapshot. For more information, see Tagging
    your Amazon EC2 resources in the Amazon Elastic Compute Cloud User Guide."""

    parent_snapshot_id: Optional[str] = Field(default=UNSET, alias="ParentSnapshotId")
    """The ID of the parent snapshot."""

    kms_key_arn: Optional[str] = Field(default=UNSET, alias="KmsKeyArn")
    """The Amazon Resource Name (ARN) of the Key Management Service (KMS) key used to encrypt the snapshot."""

    sse_type: Optional[SseTypeOrStr] = Field(default=UNSET, alias="SseType")
    """Reserved for future use."""


class StartSnapshotResponseDict(TypedDict):
    description: NotRequired[str]
    snapshot_id: NotRequired[str]
    owner_id: NotRequired[str]
    status: NotRequired[StatusOrStr]
    start_time: NotRequired[RFC3339DateTime]
    volume_size: NotRequired[int]
    block_size: NotRequired[int]
    tags: NotRequired[list[TagModelDict]]
    parent_snapshot_id: NotRequired[str]
    kms_key_arn: NotRequired[str]
    sse_type: NotRequired[SseTypeOrStr]
