from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..sectionable_block import SectionableBlock, SectionableBlockDict
from ..sectionable_block1 import SectionableBlock1, SectionableBlock1Dict
from ..sectionable_block2 import SectionableBlock2, SectionableBlock2Dict
from ..sectionable_block3 import SectionableBlock3, SectionableBlock3Dict
from ..sectionable_block4 import SectionableBlock4, SectionableBlock4Dict
from ..sectionable_block5 import SectionableBlock5, SectionableBlock5Dict
from ..sectionable_block6 import SectionableBlock6, SectionableBlock6Dict
from ..sectionable_block7 import SectionableBlock7, SectionableBlock7Dict
from ..sectionable_block8 import SectionableBlock8, SectionableBlock8Dict
from ..sectionable_block9 import SectionableBlock9, SectionableBlock9Dict
from ..sectionable_block10 import SectionableBlock10, SectionableBlock10Dict
from ..sectionable_block11 import SectionableBlock11, SectionableBlock11Dict
from ..sectionable_block12 import SectionableBlock12, SectionableBlock12Dict
from ..sectionable_block13 import SectionableBlock13, SectionableBlock13Dict

SectionableBlock14: TypeAlias = Annotated[
    (
        Annotated[SectionableBlock, Tag("paragraph")]
        | Annotated[SectionableBlock1, Tag("image")]
        | Annotated[SectionableBlock2, Tag("button")]
        | Annotated[SectionableBlock3, Tag("heading")]
        | Annotated[SectionableBlock4, Tag("rss")]
        | Annotated[SectionableBlock5, Tag("advertisement")]
        | Annotated[SectionableBlock6, Tag("list")]
        | Annotated[SectionableBlock7, Tag("table")]
        | Annotated[SectionableBlock8, Tag("html")]
        | Annotated[SectionableBlock9, Tag("embed_link")]
        | Annotated[SectionableBlock10, Tag("poll")]
        | Annotated[SectionableBlock11, Tag("quote")]
        | Annotated[SectionableBlock12, Tag("content_break")]
        | Annotated[SectionableBlock13, Tag("paywall_break")]
    ),
    WireDiscriminator("type"),
]
"""A block that can appear inside a section. Excludes ``section`` and ``columns`` (TipTap's schema does not allow nested
sections)."""

SectionableBlock14Dict: TypeAlias = (
    SectionableBlockDict
    | SectionableBlock1Dict
    | SectionableBlock2Dict
    | SectionableBlock3Dict
    | SectionableBlock4Dict
    | SectionableBlock5Dict
    | SectionableBlock6Dict
    | SectionableBlock7Dict
    | SectionableBlock8Dict
    | SectionableBlock9Dict
    | SectionableBlock10Dict
    | SectionableBlock11Dict
    | SectionableBlock12Dict
    | SectionableBlock13Dict
)
