from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.checksum_algorithm1 import ChecksumAlgorithm1OrStr


class PutSnapshotBlockResponse(SdkBaseModel):
    checksum: Optional[str] = Field(default=UNSET, alias="Checksum")
    """The SHA256 checksum generated for the block data by Amazon EBS."""

    checksum_algorithm: Optional[ChecksumAlgorithm1OrStr] = Field(default=UNSET, alias="ChecksumAlgorithm")
    """The algorithm used by Amazon EBS to generate the checksum."""


class PutSnapshotBlockResponseDict(TypedDict):
    checksum: NotRequired[str]
    checksum_algorithm: NotRequired[ChecksumAlgorithm1OrStr]
