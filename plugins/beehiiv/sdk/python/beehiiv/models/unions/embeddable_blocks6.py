from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..embeddable_blocks import EmbeddableBlocks, EmbeddableBlocksDict
from ..embeddable_blocks1 import EmbeddableBlocks1, EmbeddableBlocks1Dict
from ..embeddable_blocks2 import EmbeddableBlocks2, EmbeddableBlocks2Dict
from ..embeddable_blocks3 import EmbeddableBlocks3, EmbeddableBlocks3Dict
from ..embeddable_blocks4 import EmbeddableBlocks4, EmbeddableBlocks4Dict
from ..embeddable_blocks5 import EmbeddableBlocks5, EmbeddableBlocks5Dict

EmbeddableBlocks6: TypeAlias = Annotated[
    (
        Annotated[EmbeddableBlocks, Tag("paragraph")]
        | Annotated[EmbeddableBlocks1, Tag("image")]
        | Annotated[EmbeddableBlocks2, Tag("button")]
        | Annotated[EmbeddableBlocks3, Tag("heading")]
        | Annotated[EmbeddableBlocks4, Tag("rss")]
        | Annotated[EmbeddableBlocks5, Tag("advertisement")]
    ),
    WireDiscriminator("type"),
]
"""A block in the post content that can be embedded within a column."""

EmbeddableBlocks6Dict: TypeAlias = (
    EmbeddableBlocksDict
    | EmbeddableBlocks1Dict
    | EmbeddableBlocks2Dict
    | EmbeddableBlocks3Dict
    | EmbeddableBlocks4Dict
    | EmbeddableBlocks5Dict
)
