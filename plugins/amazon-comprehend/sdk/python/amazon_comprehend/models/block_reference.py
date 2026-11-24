from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .child_block import ChildBlock, ChildBlockDict


class BlockReference(SdkBaseModel):
    block_id: Optional[str] = Field(default=UNSET, alias="BlockId")
    """Unique identifier for the block."""

    begin_offset: Optional[int] = Field(default=UNSET, alias="BeginOffset")
    """Offset of the start of the block within its parent block."""

    end_offset: Optional[int] = Field(default=UNSET, alias="EndOffset")
    """Offset of the end of the block within its parent block."""

    child_blocks: Optional[list[ChildBlock]] = Field(default=UNSET, alias="ChildBlocks")
    """List of child blocks within this block."""


class BlockReferenceDict(TypedDict):
    block_id: NotRequired[str]
    begin_offset: NotRequired[int]
    end_offset: NotRequired[int]
    child_blocks: NotRequired[list[ChildBlockDict]]
