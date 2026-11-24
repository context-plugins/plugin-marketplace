from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PodcastEpisodeOrderBy(str, Enum):
    """The field that episode list results are sorted by. Defaults to ``displayed_date``<br>``created`` - The time in
    which the episode was first created.<br>``updated`` - The time the episode was last updated.<br>``publish_date`` -
    The exact time the system published the episode (when it went live), not the scheduled time the user set.<br>
    ``displayed_date`` - The time displayed in place of the ``publish_date``. Uses a custom display date if set,
    otherwise the scheduled time the user set for publication, otherwise the ``publish_date``, otherwise the creation
    date. For imported episodes, the original feed's ``pubDate`` is stored as the custom display date. This is the same
    field used to order episodes in the podcast's RSS feed."""

    CREATED = "created"
    UPDATED = "updated"
    PUBLISH_DATE = "publish_date"
    DISPLAYED_DATE = "displayed_date"

    __str__ = str.__str__


PodcastEpisodeOrderByOrStr: TypeAlias = Annotated[
    PodcastEpisodeOrderBy | str, open_enum_validator(PodcastEpisodeOrderBy)
]
