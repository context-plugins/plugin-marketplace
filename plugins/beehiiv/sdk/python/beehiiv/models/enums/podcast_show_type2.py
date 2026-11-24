from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PodcastShowType2(str, Enum):
    """The type of the podcast."""

    EPISODIC = "episodic"
    SERIAL = "serial"

    __str__ = str.__str__


PodcastShowType2OrStr: TypeAlias = Annotated[PodcastShowType2 | str, open_enum_validator(PodcastShowType2)]
