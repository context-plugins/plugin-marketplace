from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .block import Block, BlockDict


class ListSnapshotBlocksResponse(SdkBaseModel):
    blocks: Optional[list[Block]] = Field(default=UNSET, alias="Blocks")
    """An array of objects containing information about the blocks."""

    expiry_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ExpiryTime")
    """The time when the BlockToken expires."""

    volume_size: Optional[int] = Field(default=UNSET, alias="VolumeSize")
    """The size of the volume in GB."""

    block_size: Optional[int] = Field(default=UNSET, alias="BlockSize")
    """The size of the blocks in the snapshot, in bytes."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The token to use to retrieve the next page of results. This value is null when there are no more results to
    return."""


class ListSnapshotBlocksResponseDict(TypedDict):
    blocks: NotRequired[list[BlockDict]]
    expiry_time: NotRequired[RFC3339DateTime]
    volume_size: NotRequired[int]
    block_size: NotRequired[int]
    next_token: NotRequired[str]
