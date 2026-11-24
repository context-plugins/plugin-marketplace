from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.block_type import BlockTypeOrStr
from .geometry import Geometry, GeometryDict
from .relationships_list_item import RelationshipsListItem, RelationshipsListItemDict


class Block(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """Unique identifier for the block."""

    block_type: Optional[BlockTypeOrStr] = Field(default=UNSET, alias="BlockType")
    """The block represents a line of text or one word of text. WORD - A word that's detected on a document page. A word
    is one or more ISO basic Latin script characters that aren't separated by spaces. LINE - A string of tab-delimited,
    contiguous words that are detected on a document page"""

    text: Optional[str] = Field(default=UNSET, alias="Text")
    """The word or line of text extracted from the block."""

    page: Optional[int] = Field(default=UNSET, alias="Page")
    """Page number where the block appears."""

    geometry: Optional[Geometry] = Field(default=UNSET, alias="Geometry")
    relationships: Optional[list[RelationshipsListItem]] = Field(default=UNSET, alias="Relationships")
    """A list of child blocks of the current block. For example, a LINE object has child blocks for each WORD block
    that's part of the line of text."""


class BlockDict(TypedDict):
    id: NotRequired[str]
    block_type: NotRequired[BlockTypeOrStr]
    text: NotRequired[str]
    page: NotRequired[int]
    geometry: NotRequired[GeometryDict]
    relationships: NotRequired[list[RelationshipsListItemDict]]
