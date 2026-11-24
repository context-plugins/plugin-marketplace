from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RssBlockLayout(str, Enum):
    """The layout of the articles from the feed."""

    _1_COL = "1-col"
    _2_COL = "2-col"
    _3_COL = "3-col"
    _4_COL = "4-col"

    __str__ = str.__str__


RssBlockLayoutOrStr: TypeAlias = Annotated[RssBlockLayout | str, open_enum_validator(RssBlockLayout)]
