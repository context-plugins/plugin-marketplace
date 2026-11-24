from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.acl import AclOrStr
from .enums.gid import GidOrStr
from .enums.kms_key import KmsKeyOrStr
from .enums.mode import ModeOrStr
from .enums.storage_class import StorageClassOrStr
from .enums.symlink import SymlinkOrStr
from .enums.temporary_hold import TemporaryHoldOrStr
from .enums.time_created import TimeCreatedOrStr
from .enums.uid import UidOrStr


class MetadataOptions2(SdkBaseModel):
    """Represents the selected metadata options for a transfer job."""

    kms_key: Optional[KmsKeyOrStr] = Field(default=UNSET, alias="kmsKey")
    """Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between
    Google Cloud Storage buckets. If unspecified, the default behavior is the same as
    KMS_KEY_DESTINATION_BUCKET_DEFAULT."""

    acl: Optional[AclOrStr] = UNSET
    """Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. If
    unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT."""

    mode: Optional[ModeOrStr] = UNSET
    """Specifies how each file's mode attribute should be handled by the transfer. By default, mode is not preserved.
    Only applicable to transfers involving POSIX file systems, and ignored for other transfers."""

    time_created: Optional[TimeCreatedOrStr] = Field(default=UNSET, alias="timeCreated")
    """Specifies how each object's ``timeCreated`` metadata is preserved for transfers. If unspecified, the default
    behavior is the same as TIME_CREATED_SKIP. This behavior is supported for transfers to Cloud Storage buckets from
    Cloud Storage, Amazon S3, S3-compatible storage, and Azure sources."""

    gid: Optional[GidOrStr] = UNSET
    """Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. By default, GID is
    not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers."""

    uid: Optional[UidOrStr] = UNSET
    """Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. By default, UID is not
    preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers."""

    symlink: Optional[SymlinkOrStr] = UNSET
    """Specifies how symlinks should be handled by the transfer. By default, symlinks are not preserved. Only applicable
    to transfers involving POSIX file systems, and ignored for other transfers."""

    temporary_hold: Optional[TemporaryHoldOrStr] = Field(default=UNSET, alias="temporaryHold")
    """Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage
    buckets. If unspecified, the default behavior is the same as TEMPORARY_HOLD_PRESERVE."""

    storage_class: Optional[StorageClassOrStr] = Field(default=UNSET, alias="storageClass")
    """Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. If unspecified,
    the default behavior is the same as STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT."""


class MetadataOptions2Dict(TypedDict):
    kms_key: NotRequired[KmsKeyOrStr]
    acl: NotRequired[AclOrStr]
    mode: NotRequired[ModeOrStr]
    time_created: NotRequired[TimeCreatedOrStr]
    gid: NotRequired[GidOrStr]
    uid: NotRequired[UidOrStr]
    symlink: NotRequired[SymlinkOrStr]
    temporary_hold: NotRequired[TemporaryHoldOrStr]
    storage_class: NotRequired[StorageClassOrStr]
