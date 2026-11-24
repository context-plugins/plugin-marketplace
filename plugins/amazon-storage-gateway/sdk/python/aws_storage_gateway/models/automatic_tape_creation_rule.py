from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutomaticTapeCreationRule(SdkBaseModel):
    tape_barcode_prefix: str = Field(alias="TapeBarcodePrefix")
    """A prefix that you append to the barcode of the virtual tape that you are creating. This prefix makes the barcode
    unique. The prefix must be 1-4 characters in length and must be one of the uppercase letters from A to Z."""

    pool_id: str = Field(alias="PoolId")
    """The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the
    Amazon S3 storage class that is associated with the pool. When you use your backup application to eject the tape,
    the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the
    pool."""

    tape_size_in_bytes: int = Field(alias="TapeSizeInBytes")
    """The size, in bytes, of the virtual tape capacity."""

    minimum_num_tapes: int = Field(alias="MinimumNumTapes")
    """The minimum number of available virtual tapes that the gateway maintains at all times. If the number of tapes on
    the gateway goes below this value, the gateway creates as many new tapes as are needed to have MinimumNumTapes on
    the gateway. For more information about automatic tape creation, see Creating Tapes Automatically."""

    worm: Optional[bool] = Field(default=UNSET, alias="Worm")
    """Set to true to indicate that tapes are to be archived as write-once-read-many (WORM). Set to false when WORM is
    not enabled for tapes."""


class AutomaticTapeCreationRuleDict(TypedDict):
    tape_barcode_prefix: str
    pool_id: str
    tape_size_in_bytes: int
    minimum_num_tapes: int
    worm: NotRequired[bool]
