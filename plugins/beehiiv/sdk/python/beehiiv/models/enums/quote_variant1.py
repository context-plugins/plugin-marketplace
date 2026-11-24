from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QuoteVariant1(str, Enum):
    """The type of quote block. Defaults to "block"."""

    BLOCK = "block"
    INLINE = "inline"
    QUOTATION = "quotation"

    __str__ = str.__str__


QuoteVariant1OrStr: TypeAlias = Annotated[QuoteVariant1 | str, open_enum_validator(QuoteVariant1)]
