from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PodcastShowType(str, Enum):
    """The type of the podcast.<br>``episodic`` - Episodes can be consumed in any order.<br>``serial`` - Episodes are
    intended to be consumed in order."""

    EPISODIC = "episodic"
    SERIAL = "serial"

    __str__ = str.__str__


PodcastShowTypeOrStr: TypeAlias = Annotated[PodcastShowType | str, open_enum_validator(PodcastShowType)]
