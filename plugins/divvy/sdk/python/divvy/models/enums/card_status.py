from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CardStatus(str, Enum):
    """CardStatus."""

    ACTIVATED = "ACTIVATED"
    NOT_ACTIVATED = "NOT_ACTIVATED"
    FROZEN = "FROZEN"
    DELETED = "DELETED"

    __str__ = str.__str__


CardStatusOrStr: TypeAlias = Annotated[CardStatus | str, open_enum_validator(CardStatus)]
