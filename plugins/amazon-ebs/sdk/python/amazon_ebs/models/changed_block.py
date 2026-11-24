from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ChangedBlock(SdkBaseModel):
    block_index: Optional[int] = Field(default=UNSET, alias="BlockIndex")
    """The block index."""

    first_block_token: Optional[str] = Field(default=UNSET, alias="FirstBlockToken")
    """The block token for the block index of the FirstSnapshotId specified in the ListChangedBlocks operation. This
    value is absent if the first snapshot does not have the changed block that is on the second snapshot."""

    second_block_token: Optional[str] = Field(default=UNSET, alias="SecondBlockToken")
    """The block token for the block index of the SecondSnapshotId specified in the ListChangedBlocks operation."""


class ChangedBlockDict(TypedDict):
    block_index: NotRequired[int]
    first_block_token: NotRequired[str]
    second_block_token: NotRequired[str]
