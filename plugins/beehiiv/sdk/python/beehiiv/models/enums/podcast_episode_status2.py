from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PodcastEpisodeStatus2(str, Enum):
    """The status of the episode."""

    DRAFT = "draft"
    SCHEDULED = "scheduled"
    PUBLISHED = "published"
    ARCHIVED = "archived"

    __str__ = str.__str__


PodcastEpisodeStatus2OrStr: TypeAlias = Annotated[
    PodcastEpisodeStatus2 | str, open_enum_validator(PodcastEpisodeStatus2)
]
