from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.pool_status import PoolStatusOrStr
from .enums.retention_lock_type1 import RetentionLockType1OrStr
from .enums.storage_class1 import StorageClass1OrStr


class PoolInfo(SdkBaseModel):
    pool_arn: Optional[str] = Field(default=UNSET, alias="PoolARN")
    """The Amazon Resource Name (ARN) of the custom tape pool. Use the ListTapePools operation to return a list of
    custom tape pools for your account and Amazon Web Services Region."""

    pool_name: Optional[str] = Field(default=UNSET, alias="PoolName")
    r"""The name of the custom tape pool. PoolName can use all ASCII characters, except '/' and '\'."""

    storage_class: Optional[StorageClass1OrStr] = Field(default=UNSET, alias="StorageClass")
    """The storage class that is associated with the custom pool. When you use your backup application to eject the
    tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds
    to the pool."""

    retention_lock_type: Optional[RetentionLockType1OrStr] = Field(default=UNSET, alias="RetentionLockType")
    """Tape retention lock type, which can be configured in two modes. When configured in governance mode, Amazon Web
    Services accounts with specific IAM permissions are authorized to remove the tape retention lock from archived
    virtual tapes. When configured in compliance mode, the tape retention lock cannot be removed by any user, including
    the root Amazon Web Services account."""

    retention_lock_time_in_days: Optional[int] = Field(default=UNSET, alias="RetentionLockTimeInDays")
    """Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years (36,500 days)."""

    pool_status: Optional[PoolStatusOrStr] = Field(default=UNSET, alias="PoolStatus")
    """Status of the custom tape pool. Pool can be ACTIVE or DELETED."""


class PoolInfoDict(TypedDict):
    pool_arn: NotRequired[str]
    pool_name: NotRequired[str]
    storage_class: NotRequired[StorageClass1OrStr]
    retention_lock_type: NotRequired[RetentionLockType1OrStr]
    retention_lock_time_in_days: NotRequired[int]
    pool_status: NotRequired[PoolStatusOrStr]
