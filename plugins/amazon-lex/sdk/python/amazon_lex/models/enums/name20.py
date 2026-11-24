from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name20(str, Enum):
    """Specifies whether to group the utterances by their text or their state."""

    UTTERANCE_TEXT = "UtteranceText"
    UTTERANCE_STATE = "UtteranceState"

    __str__ = str.__str__


Name20OrStr: TypeAlias = Annotated[Name20 | str, open_enum_validator(Name20)]
