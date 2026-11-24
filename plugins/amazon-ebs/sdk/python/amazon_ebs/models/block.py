from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Block(SdkBaseModel):
    block_index: Optional[int] = Field(default=UNSET, alias="BlockIndex")
    """The block index."""

    block_token: Optional[str] = Field(default=UNSET, alias="BlockToken")
    """The block token for the block index."""


class BlockDict(TypedDict):
    block_index: NotRequired[int]
    block_token: NotRequired[str]
