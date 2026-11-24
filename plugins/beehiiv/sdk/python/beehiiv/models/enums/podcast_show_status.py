from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PodcastShowStatus(str, Enum):
    """The status of the podcast.<br>``draft`` - No episodes have been published.<br> ``live`` - Published and
    active.<br>``archived`` - The podcast is no longer active."""

    DRAFT = "draft"
    LIVE = "live"
    ARCHIVED = "archived"

    __str__ = str.__str__


PodcastShowStatusOrStr: TypeAlias = Annotated[PodcastShowStatus | str, open_enum_validator(PodcastShowStatus)]
