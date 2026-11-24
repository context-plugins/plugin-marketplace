from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ChildBlock(SdkBaseModel):
    child_block_id: Optional[str] = Field(default=UNSET, alias="ChildBlockId")
    """Unique identifier for the child block."""

    begin_offset: Optional[int] = Field(default=UNSET, alias="BeginOffset")
    """Offset of the start of the child block within its parent block."""

    end_offset: Optional[int] = Field(default=UNSET, alias="EndOffset")
    """Offset of the end of the child block within its parent block."""


class ChildBlockDict(TypedDict):
    child_block_id: NotRequired[str]
    begin_offset: NotRequired[int]
    end_offset: NotRequired[int]
