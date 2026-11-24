from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .volumei_scsi_attributes import VolumeiScsiAttributes, VolumeiScsiAttributesDict


class CachediScsiVolume(SdkBaseModel):
    volume_arn: Optional[str] = Field(default=UNSET, alias="VolumeARN")
    """The Amazon Resource Name (ARN) of the storage volume."""

    volume_id: Optional[str] = Field(default=UNSET, alias="VolumeId")
    """The unique identifier of the volume, e.g., vol-AE4B946D."""

    volume_type: Optional[str] = Field(default=UNSET, alias="VolumeType")
    """One of the VolumeType enumeration values that describes the type of the volume."""

    volume_status: Optional[str] = Field(default=UNSET, alias="VolumeStatus")
    """One of the VolumeStatus values that indicates the state of the storage volume."""

    volume_attachment_status: Optional[str] = Field(default=UNSET, alias="VolumeAttachmentStatus")
    """A value that indicates whether a storage volume is attached to or detached from a gateway. For more information,
    see Moving your volumes to a different gateway."""

    volume_size_in_bytes: Optional[int] = Field(default=UNSET, alias="VolumeSizeInBytes")
    """The size, in bytes, of the volume capacity."""

    volume_progress: Optional[float] = Field(default=UNSET, alias="VolumeProgress")
    """Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of
    data transferred. This field does not appear in the response if the cached volume is not restoring or
    bootstrapping."""

    source_snapshot_id: Optional[str] = Field(default=UNSET, alias="SourceSnapshotId")
    """If the cached volume was created from a snapshot, this field contains the snapshot ID used, e.g., snap-78e22663.
    Otherwise, this field is not included."""

    volumei_scsi_attributes: Optional[VolumeiScsiAttributes] = Field(default=UNSET, alias="VolumeiSCSIAttributes")
    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreatedDate")
    """The date the volume was created. Volumes created prior to March 28, 2017 don’t have this timestamp."""

    volume_used_in_bytes: Optional[int] = Field(default=UNSET, alias="VolumeUsedInBytes")
    """The size of the data stored on the volume in bytes. This value is calculated based on the number of blocks that
    are touched, instead of the actual amount of data written. This value can be useful for sequential write patterns
    but less accurate for random write patterns. VolumeUsedInBytes is different from the compressed size of the volume,
    which is the value that is used to calculate your bill. This value is not available for volumes created prior to May
    13, 2015, until you store data on the volume. If you use a delete tool that overwrites the data on your volume with
    random data, your usage w"""

    kms_key: Optional[str] = Field(default=UNSET, alias="KMSKey")
    target_name: Optional[str] = Field(default=UNSET, alias="TargetName")
    """The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN.
    For example, specifying TargetName as myvolume results in the target ARN of
    arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The
    target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the
    value that was previously used for this volume as the new target name."""


class CachediScsiVolumeDict(TypedDict):
    volume_arn: NotRequired[str]
    volume_id: NotRequired[str]
    volume_type: NotRequired[str]
    volume_status: NotRequired[str]
    volume_attachment_status: NotRequired[str]
    volume_size_in_bytes: NotRequired[int]
    volume_progress: NotRequired[float]
    source_snapshot_id: NotRequired[str]
    volumei_scsi_attributes: NotRequired[VolumeiScsiAttributesDict]
    created_date: NotRequired[RFC3339DateTime]
    volume_used_in_bytes: NotRequired[int]
    kms_key: NotRequired[str]
    target_name: NotRequired[str]
