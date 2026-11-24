from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class TapeInfo(SdkBaseModel):
    tape_arn: Optional[str] = Field(default=UNSET, alias="TapeARN")
    """The Amazon Resource Name (ARN) of a virtual tape."""

    tape_barcode: Optional[str] = Field(default=UNSET, alias="TapeBarcode")
    """The barcode that identifies a specific virtual tape."""

    tape_size_in_bytes: Optional[int] = Field(default=UNSET, alias="TapeSizeInBytes")
    """The size, in bytes, of a virtual tape."""

    tape_status: Optional[str] = Field(default=UNSET, alias="TapeStatus")
    """The status of the tape."""

    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    """The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for
    your account and Amazon Web Services Region."""

    pool_id: Optional[str] = Field(default=UNSET, alias="PoolId")
    """The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3
    storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is
    archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool."""

    retention_start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="RetentionStartDate")
    """The date that the tape became subject to tape retention lock."""

    pool_entry_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="PoolEntryDate")
    """The date that the tape entered the custom tape pool with tape retention lock enabled."""


class TapeInfoDict(TypedDict):
    tape_arn: NotRequired[str]
    tape_barcode: NotRequired[str]
    tape_size_in_bytes: NotRequired[int]
    tape_status: NotRequired[str]
    gateway_arn: NotRequired[str]
    pool_id: NotRequired[str]
    retention_start_date: NotRequired[RFC3339DateTime]
    pool_entry_date: NotRequired[RFC3339DateTime]
