from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Modality(str, Enum):
    """Specifies whether the test-set being imported contains written or spoken data."""

    TEXT = "Text"
    AUDIO = "Audio"

    __str__ = str.__str__


ModalityOrStr: TypeAlias = Annotated[Modality | str, open_enum_validator(Modality)]
