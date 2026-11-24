from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name19(str, Enum):
    """The category by which the utterance analytics were grouped."""

    UTTERANCE_TEXT = "UtteranceText"
    UTTERANCE_STATE = "UtteranceState"

    __str__ = str.__str__


Name19OrStr: TypeAlias = Annotated[Name19 | str, open_enum_validator(Name19)]
