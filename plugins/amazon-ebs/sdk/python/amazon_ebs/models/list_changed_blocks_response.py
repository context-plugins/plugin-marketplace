from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .changed_block import ChangedBlock, ChangedBlockDict


class ListChangedBlocksResponse(SdkBaseModel):
    changed_blocks: Optional[list[ChangedBlock]] = Field(default=UNSET, alias="ChangedBlocks")
    """An array of objects containing information about the changed blocks."""

    expiry_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ExpiryTime")
    """The time when the BlockToken expires."""

    volume_size: Optional[int] = Field(default=UNSET, alias="VolumeSize")
    """The size of the volume in GB."""

    block_size: Optional[int] = Field(default=UNSET, alias="BlockSize")
    """The size of the blocks in the snapshot, in bytes."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The token to use to retrieve the next page of results. This value is null when there are no more results to
    return."""


class ListChangedBlocksResponseDict(TypedDict):
    changed_blocks: NotRequired[list[ChangedBlockDict]]
    expiry_time: NotRequired[RFC3339DateTime]
    volume_size: NotRequired[int]
    block_size: NotRequired[int]
    next_token: NotRequired[str]
