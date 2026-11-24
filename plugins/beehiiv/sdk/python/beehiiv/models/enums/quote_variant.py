from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QuoteVariant(str, Enum):
    """The variant of the quote block."""

    BLOCK = "block"
    INLINE = "inline"
    QUOTATION = "quotation"

    __str__ = str.__str__


QuoteVariantOrStr: TypeAlias = Annotated[QuoteVariant | str, open_enum_validator(QuoteVariant)]
