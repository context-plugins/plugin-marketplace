from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ParagraphBlockTextStyle(str, Enum):
    """Inline formatting to apply to a formatted text section. ``strikethrough`` renders as a strike mark."""

    BOLD = "bold"
    ITALIC = "italic"
    UNDERLINE = "underline"
    STRIKETHROUGH = "strikethrough"

    __str__ = str.__str__


ParagraphBlockTextStyleOrStr: TypeAlias = Annotated[
    ParagraphBlockTextStyle | str, open_enum_validator(ParagraphBlockTextStyle)
]
