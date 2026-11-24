from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MessageSelectionStrategy(str, Enum):
    """Indicates how a message is selected from a message group among retries."""

    RANDOM = "Random"
    ORDERED = "Ordered"

    __str__ = str.__str__


MessageSelectionStrategyOrStr: TypeAlias = Annotated[
    MessageSelectionStrategy | str, open_enum_validator(MessageSelectionStrategy)
]
