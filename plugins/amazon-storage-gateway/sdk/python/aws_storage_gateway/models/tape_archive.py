from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class TapeArchive(SdkBaseModel):
    tape_arn: Optional[str] = Field(default=UNSET, alias="TapeARN")
    """The Amazon Resource Name (ARN) of an archived virtual tape."""

    tape_barcode: Optional[str] = Field(default=UNSET, alias="TapeBarcode")
    """The barcode that identifies the archived virtual tape."""

    tape_created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TapeCreatedDate")
    """The date the virtual tape was created."""

    tape_size_in_bytes: Optional[int] = Field(default=UNSET, alias="TapeSizeInBytes")
    """The size, in bytes, of the archived virtual tape."""

    completion_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CompletionTime")
    """The time that the archiving of the virtual tape was completed. The default timestamp format is in the ISO8601
    extended YYYY-MM-DD'T'HH:MM:SS'Z' format."""

    retrieved_to: Optional[str] = Field(default=UNSET, alias="RetrievedTo")
    """The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being retrieved to. The virtual tape
    is retrieved from the virtual tape shelf (VTS)."""

    tape_status: Optional[str] = Field(default=UNSET, alias="TapeStatus")
    """The current state of the archived virtual tape."""

    tape_used_in_bytes: Optional[int] = Field(default=UNSET, alias="TapeUsedInBytes")
    """The size, in bytes, of data stored on the virtual tape. This value is not available for tapes created prior to
    May 13, 2015."""

    kms_key: Optional[str] = Field(default=UNSET, alias="KMSKey")
    pool_id: Optional[str] = Field(default=UNSET, alias="PoolId")
    """The ID of the pool that was used to archive the tape. The tapes in this pool are archived in the S3 storage class
    that is associated with the pool."""

    worm: Optional[bool] = Field(default=UNSET, alias="Worm")
    """Set to true if the archived tape is stored as write-once-read-many (WORM)."""

    retention_start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="RetentionStartDate")
    """If the archived tape is subject to tape retention lock, the date that the archived tape started being
    retained."""

    pool_entry_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="PoolEntryDate")
    """The time that the tape entered the custom tape pool. The default timestamp format is in the ISO8601 extended
    YYYY-MM-DD'T'HH:MM:SS'Z' format."""


class TapeArchiveDict(TypedDict):
    tape_arn: NotRequired[str]
    tape_barcode: NotRequired[str]
    tape_created_date: NotRequired[RFC3339DateTime]
    tape_size_in_bytes: NotRequired[int]
    completion_time: NotRequired[RFC3339DateTime]
    retrieved_to: NotRequired[str]
    tape_status: NotRequired[str]
    tape_used_in_bytes: NotRequired[int]
    kms_key: NotRequired[str]
    pool_id: NotRequired[str]
    worm: NotRequired[bool]
    retention_start_date: NotRequired[RFC3339DateTime]
    pool_entry_date: NotRequired[RFC3339DateTime]
