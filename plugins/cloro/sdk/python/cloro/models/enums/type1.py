from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """Discriminates plain text ads (``RESULT``) from shopping-style sponsored cards (``SHOPPING_CARD``). Shopping cards
    appear in the right-hand-side PLA carousel, the top-of-page PLA carousel, and the top-of-page sponsored
    shopping-card carousels (vehicles, products, hotels, …)."""

    RESULT = "RESULT"
    SHOPPING_CARD = "SHOPPING_CARD"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
