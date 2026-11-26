from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SideAlphAiRestSymbolsApi(str, Enum):
    """Value-flow label; ``transaction_code`` carries the raw code."""

    BUY = "buy"
    SELL = "sell"

    __str__ = str.__str__


SideAlphAiRestSymbolsApiOrStr: TypeAlias = Annotated[
    SideAlphAiRestSymbolsApi | str, open_enum_validator(SideAlphAiRestSymbolsApi)
]
