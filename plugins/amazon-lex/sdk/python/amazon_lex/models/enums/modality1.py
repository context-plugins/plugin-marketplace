from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Modality1(str, Enum):
    """Specifies whether the test set contains written or spoken data."""

    TEXT = "Text"
    AUDIO = "Audio"

    __str__ = str.__str__


Modality1OrStr: TypeAlias = Annotated[Modality1 | str, open_enum_validator(Modality1)]
