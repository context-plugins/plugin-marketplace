from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VolumeInfo(SdkBaseModel):
    volume_arn: Optional[str] = Field(default=UNSET, alias="VolumeARN")
    """The Amazon Resource Name (ARN) for the storage volume. For example, the following is a valid ARN:
    arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB Valid Values: 50 to 500
    lowercase letters, numbers, periods (.), and hyphens (-)."""

    volume_id: Optional[str] = Field(default=UNSET, alias="VolumeId")
    """The unique identifier assigned to the volume. This ID becomes part of the volume Amazon Resource Name (ARN),
    which you use as input for other operations. Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and
    hyphens (-)."""

    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    gateway_id: Optional[str] = Field(default=UNSET, alias="GatewayId")
    """The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon
    Resource Name (ARN), which you use as input for other operations. Valid Values: 50 to 500 lowercase letters,
    numbers, periods (.), and hyphens (-)."""

    volume_type: Optional[str] = Field(default=UNSET, alias="VolumeType")
    """One of the VolumeType enumeration values describing the type of the volume."""

    volume_size_in_bytes: Optional[int] = Field(default=UNSET, alias="VolumeSizeInBytes")
    """The size of the volume in bytes. Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens
    (-)."""

    volume_attachment_status: Optional[str] = Field(default=UNSET, alias="VolumeAttachmentStatus")
    """One of the VolumeStatus values that indicates the state of the storage volume."""


class VolumeInfoDict(TypedDict):
    volume_arn: NotRequired[str]
    volume_id: NotRequired[str]
    gateway_arn: NotRequired[str]
    gateway_id: NotRequired[str]
    volume_type: NotRequired[str]
    volume_size_in_bytes: NotRequired[int]
    volume_attachment_status: NotRequired[str]
