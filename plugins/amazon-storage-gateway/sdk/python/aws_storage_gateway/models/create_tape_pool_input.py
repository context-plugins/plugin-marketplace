from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.retention_lock_type import RetentionLockTypeOrStr
from .enums.storage_class import StorageClassOrStr
from .tag_model import TagModel, TagModelDict


class CreateTapePoolInput(SdkBaseModel):
    pool_name: str = Field(alias="PoolName")
    """The name of the new custom tape pool."""

    storage_class: StorageClassOrStr = Field(alias="StorageClass")
    """The storage class that is associated with the new custom pool. When you use your backup application to eject the
    tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds
    to the pool."""

    retention_lock_type: Optional[RetentionLockTypeOrStr] = Field(default=UNSET, alias="RetentionLockType")
    """Tape retention lock can be configured in two modes. When configured in governance mode, Amazon Web Services
    accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes.
    When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root Amazon
    Web Services account."""

    retention_lock_time_in_days: Optional[int] = Field(default=UNSET, alias="RetentionLockTimeInDays")
    """Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years (36,500 days)."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags that can be assigned to tape pool. Each tag is a key-value pair. Valid characters for key
    and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + -
    = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is
    256."""


class CreateTapePoolInputDict(TypedDict):
    pool_name: str
    storage_class: StorageClassOrStr
    retention_lock_type: NotRequired[RetentionLockTypeOrStr]
    retention_lock_time_in_days: NotRequired[int]
    tags: NotRequired[list[TagModelDict]]
