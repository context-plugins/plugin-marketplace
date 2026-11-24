from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..block import Block, BlockDict
from ..block1 import Block1, Block1Dict
from ..block2 import Block2, Block2Dict
from ..block3 import Block3, Block3Dict
from ..block4 import Block4, Block4Dict
from ..block5 import Block5, Block5Dict
from ..block6 import Block6, Block6Dict
from ..block7 import Block7, Block7Dict
from ..block8 import Block8, Block8Dict
from ..block9 import Block9, Block9Dict
from ..block10 import Block10, Block10Dict
from ..block11 import Block11, Block11Dict
from ..block12 import Block12, Block12Dict
from ..block13 import Block13, Block13Dict
from ..block14 import Block14, Block14Dict
from ..block15 import Block15, Block15Dict
from ..block16 import Block16, Block16Dict

Block17: TypeAlias = Annotated[
    (
        Annotated[Block, Tag("paragraph")]
        | Annotated[Block1, Tag("image")]
        | Annotated[Block2, Tag("button")]
        | Annotated[Block3, Tag("heading")]
        | Annotated[Block4, Tag("rss")]
        | Annotated[Block5, Tag("advertisement")]
        | Annotated[Block6, Tag("automated_advertisement_placement")]
        | Annotated[Block7, Tag("columns")]
        | Annotated[Block8, Tag("list")]
        | Annotated[Block9, Tag("table")]
        | Annotated[Block10, Tag("html")]
        | Annotated[Block11, Tag("embed_link")]
        | Annotated[Block12, Tag("poll")]
        | Annotated[Block13, Tag("quote")]
        | Annotated[Block14, Tag("content_break")]
        | Annotated[Block15, Tag("paywall_break")]
        | Annotated[Block16, Tag("section")]
    ),
    WireDiscriminator("type"),
]
"""A block in the post content."""

Block17Dict: TypeAlias = (
    BlockDict
    | Block1Dict
    | Block2Dict
    | Block3Dict
    | Block4Dict
    | Block5Dict
    | Block6Dict
    | Block7Dict
    | Block8Dict
    | Block9Dict
    | Block10Dict
    | Block11Dict
    | Block12Dict
    | Block13Dict
    | Block14Dict
    | Block15Dict
    | Block16Dict
)
