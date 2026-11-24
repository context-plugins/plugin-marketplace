from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AudioType(str, Enum):
    ORIGINAL_SOUND = "original_sound"
    MUSIC = "music"

    __str__ = str.__str__


AudioTypeOrStr: TypeAlias = Annotated[AudioType | str, open_enum_validator(AudioType)]
