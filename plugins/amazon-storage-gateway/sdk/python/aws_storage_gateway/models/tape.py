from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Tape(SdkBaseModel):
    tape_arn: Optional[str] = Field(default=UNSET, alias="TapeARN")
    """The Amazon Resource Name (ARN) of the virtual tape."""

    tape_barcode: Optional[str] = Field(default=UNSET, alias="TapeBarcode")
    """The barcode that identifies a specific virtual tape."""

    tape_created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="TapeCreatedDate")
    """The date the virtual tape was created."""

    tape_size_in_bytes: Optional[int] = Field(default=UNSET, alias="TapeSizeInBytes")
    """The size, in bytes, of the virtual tape capacity."""

    tape_status: Optional[str] = Field(default=UNSET, alias="TapeStatus")
    """The current state of the virtual tape."""

    vtl_device: Optional[str] = Field(default=UNSET, alias="VTLDevice")
    """The virtual tape library (VTL) device that the virtual tape is associated with."""

    progress: Optional[float] = Field(default=UNSET, alias="Progress")
    """For archiving virtual tapes, indicates how much data remains to be uploaded before archiving is complete. Range:
    0 (not started) to 100 (complete)."""

    tape_used_in_bytes: Optional[int] = Field(default=UNSET, alias="TapeUsedInBytes")
    """The size, in bytes, of data stored on the virtual tape. This value is not available for tapes created prior to
    May 13, 2015."""

    kms_key: Optional[str] = Field(default=UNSET, alias="KMSKey")
    pool_id: Optional[str] = Field(default=UNSET, alias="PoolId")
    """The ID of the pool that contains tapes that will be archived. The tapes in this pool are archived in the S3
    storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is
    archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool."""

    worm: Optional[bool] = Field(default=UNSET, alias="Worm")
    """If the tape is archived as write-once-read-many (WORM), this value is true."""

    retention_start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="RetentionStartDate")
    """The date that the tape is first archived with tape retention lock enabled."""

    pool_entry_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="PoolEntryDate")
    """The date that the tape enters a custom tape pool."""


class TapeDict(TypedDict):
    tape_arn: NotRequired[str]
    tape_barcode: NotRequired[str]
    tape_created_date: NotRequired[RFC3339DateTime]
    tape_size_in_bytes: NotRequired[int]
    tape_status: NotRequired[str]
    vtl_device: NotRequired[str]
    progress: NotRequired[float]
    tape_used_in_bytes: NotRequired[int]
    kms_key: NotRequired[str]
    pool_id: NotRequired[str]
    worm: NotRequired[bool]
    retention_start_date: NotRequired[RFC3339DateTime]
    pool_entry_date: NotRequired[RFC3339DateTime]
