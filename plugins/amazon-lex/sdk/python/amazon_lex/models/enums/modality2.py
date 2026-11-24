from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Modality2(str, Enum):
    """Indicates whether audio or text is used for the updated test set."""

    TEXT = "Text"
    AUDIO = "Audio"

    __str__ = str.__str__


Modality2OrStr: TypeAlias = Annotated[Modality2 | str, open_enum_validator(Modality2)]
