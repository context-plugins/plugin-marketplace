from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.checksum_algorithm import ChecksumAlgorithmOrStr


class GetSnapshotBlockResponse(SdkBaseModel):
    data_length: Optional[int] = Field(default=UNSET, alias="DataLength")
    """The size of the data in the block."""

    block_data: Optional[str] = Field(default=UNSET, alias="BlockData")
    """The data content of the block."""

    checksum: Optional[str] = Field(default=UNSET, alias="Checksum")
    """The checksum generated for the block, which is Base64 encoded."""

    checksum_algorithm: Optional[ChecksumAlgorithmOrStr] = Field(default=UNSET, alias="ChecksumAlgorithm")
    """The algorithm used to generate the checksum for the block, such as SHA256."""


class GetSnapshotBlockResponseDict(TypedDict):
    data_length: NotRequired[int]
    block_data: NotRequired[str]
    checksum: NotRequired[str]
    checksum_algorithm: NotRequired[ChecksumAlgorithmOrStr]
