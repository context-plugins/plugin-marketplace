from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PodcastShowStatus2(str, Enum):
    """The status of the podcast."""

    DRAFT = "draft"
    LIVE = "live"
    ARCHIVED = "archived"

    __str__ = str.__str__


PodcastShowStatus2OrStr: TypeAlias = Annotated[PodcastShowStatus2 | str, open_enum_validator(PodcastShowStatus2)]
