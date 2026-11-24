from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Collection(str, Enum):
    """An enumeration."""

    FREE = "Free"
    GROSSING = "Grossing"
    PAID = "Paid"
    TOPSELLING_FREE = "topselling_free"
    TOPGROSSING = "topgrossing"
    TOPSELLING_PAID = "topselling_paid"
    TOPSELLING_NEW_FREE = "topselling_new_free"
    TOPSELLING_NEW_PAID = "topselling_new_paid"
    MOVERS_SHAKERS = "movers_shakers"

    __str__ = str.__str__


CollectionOrStr: TypeAlias = Annotated[Collection | str, open_enum_validator(Collection)]
