from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BlockType(str, Enum):
    """The block represents a line of text or one word of text. WORD - A word that's detected on a document page. A word
    is one or more ISO basic Latin script characters that aren't separated by spaces. LINE - A string of tab-delimited,
    contiguous words that are detected on a document page"""

    LINE = "LINE"
    WORD = "WORD"

    __str__ = str.__str__


BlockTypeOrStr: TypeAlias = Annotated[BlockType | str, open_enum_validator(BlockType)]
