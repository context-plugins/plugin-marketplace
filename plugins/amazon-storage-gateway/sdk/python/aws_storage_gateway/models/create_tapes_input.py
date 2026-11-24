from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class CreateTapesInput(SdkBaseModel):
    gateway_arn: str = Field(alias="GatewayARN")
    """The unique Amazon Resource Name (ARN) that represents the gateway to associate the virtual tapes with. Use the
    ListGateways operation to return a list of gateways for your account and Amazon Web Services Region."""

    tape_size_in_bytes: int = Field(alias="TapeSizeInBytes")
    """The size, in bytes, of the virtual tapes that you want to create. The size must be aligned by gigabyte
    (1024*1024*1024 bytes)."""

    client_token: str = Field(alias="ClientToken")
    """A unique identifier that you use to retry a request. If you retry a request, use the same ClientToken you
    specified in the initial request. Using the same ClientToken prevents creating the tape multiple times."""

    num_tapes_to_create: int = Field(alias="NumTapesToCreate")
    """The number of virtual tapes that you want to create."""

    tape_barcode_prefix: str = Field(alias="TapeBarcodePrefix")
    """A prefix that you append to the barcode of the virtual tape you are creating. This prefix makes the barcode
    unique. The prefix must be 1-4 characters in length and must be one of the uppercase letters from A to Z."""

    kms_encrypted: Optional[bool] = Field(default=UNSET, alias="KMSEncrypted")
    """Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by
    Amazon S3. Optional. Valid Values: true | false"""

    kms_key: Optional[str] = Field(default=UNSET, alias="KMSKey")
    """The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side
    encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when KMSEncrypted is true.
    Optional."""

    pool_id: Optional[str] = Field(default=UNSET, alias="PoolId")
    """The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3
    storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is
    archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool."""

    worm: Optional[bool] = Field(default=UNSET, alias="Worm")
    """Set to TRUE if the tape you are creating is to be configured as a write-once-read-many (WORM) tape."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags that can be assigned to a virtual tape. Each tag is a key-value pair. Valid characters
    for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special
    characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's
    value is 256."""


class CreateTapesInputDict(TypedDict):
    gateway_arn: str
    tape_size_in_bytes: int
    client_token: str
    num_tapes_to_create: int
    tape_barcode_prefix: str
    kms_encrypted: NotRequired[bool]
    kms_key: NotRequired[str]
    pool_id: NotRequired[str]
    worm: NotRequired[bool]
    tags: NotRequired[list[TagModelDict]]
