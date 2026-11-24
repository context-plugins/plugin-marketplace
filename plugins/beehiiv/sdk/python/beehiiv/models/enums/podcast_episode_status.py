from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PodcastEpisodeStatus(str, Enum):
    """The status of the episode.<br>``draft`` - Not yet published.<br>``scheduled`` - Scheduled for future
    publication.<br>``published`` - Available via web and RSS.<br>``archived`` - No longer available via web or RSS."""

    DRAFT = "draft"
    SCHEDULED = "scheduled"
    PUBLISHED = "published"
    ARCHIVED = "archived"

    __str__ = str.__str__


PodcastEpisodeStatusOrStr: TypeAlias = Annotated[PodcastEpisodeStatus | str, open_enum_validator(PodcastEpisodeStatus)]
