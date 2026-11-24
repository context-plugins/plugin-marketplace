from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class CreateStorediScsiVolumeInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    disk_id: str = Field(alias="DiskId")
    """The unique identifier for the gateway local disk that is configured as a stored volume. Use ListLocalDisks to
    list disk IDs for a gateway."""

    snapshot_id: Optional[str] = Field(default=UNSET, alias="SnapshotId")
    """The snapshot ID (e.g., "snap-1122aabb") of the snapshot to restore as the new stored volume. Specify this field
    if you want to create the iSCSI storage volume from a snapshot; otherwise, do not include this field. To list
    snapshots for your account use DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference."""

    preserve_existing_data: bool = Field(alias="PreserveExistingData")
    """Set to true if you want to preserve the data on the local disk. Otherwise, set to false to create an empty
    volume. Valid Values: true | false"""

    target_name: str = Field(alias="TargetName")
    """The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN.
    For example, specifying TargetName as myvolume results in the target ARN of
    arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The
    target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the
    value that was previously used for this volume as the new target name."""

    network_interface_id: str = Field(alias="NetworkInterfaceId")
    """The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4 and IPv6 addresses. Use
    DescribeGatewayInformation to get a list of the network interfaces available on a gateway. Valid Values: A valid IP
    address."""

    kms_encrypted: Optional[bool] = Field(default=UNSET, alias="KMSEncrypted")
    """Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by
    Amazon S3. Optional. Valid Values: true | false"""

    kms_key: Optional[str] = Field(default=UNSET, alias="KMSKey")
    """The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side
    encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when KMSEncrypted is true.
    Optional."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags that can be assigned to a stored volume. Each tag is a key-value pair. Valid characters
    for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special
    characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's
    value is 256."""


class CreateStorediScsiVolumeInputDict(TypedDict):
    gateway_arn: str
    disk_id: str
    snapshot_id: NotRequired[str]
    preserve_existing_data: bool
    target_name: str
    network_interface_id: str
    kms_encrypted: NotRequired[bool]
    kms_key: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
