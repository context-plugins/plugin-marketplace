from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ToneMapping(str, Enum):
    """Target tone. Only used with mapping="switch_tone"."""

    STRAIGHTFORWARD = "straightforward"
    CONFIDENT = "confident"
    FRIENDLY = "friendly"
    EMPATHETIC = "empathetic"
    PROFESSIONAL = "professional"
    CASUAL = "casual"
    DIPLOMATIC = "diplomatic"
    PERSUASIVE = "persuasive"

    __str__ = str.__str__


ToneMappingOrStr: TypeAlias = Annotated[ToneMapping | str, open_enum_validator(ToneMapping)]
