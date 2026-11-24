from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotRecommendationStatus(str, Enum):
    """The status of the bot recommendation. If the status is Failed, then the reasons for the failure are listed in the
    failureReasons field."""

    PROCESSING = "Processing"
    DELETING = "Deleting"
    DELETED = "Deleted"
    DOWNLOADING = "Downloading"
    UPDATING = "Updating"
    AVAILABLE = "Available"
    FAILED = "Failed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"

    __str__ = str.__str__


BotRecommendationStatusOrStr: TypeAlias = Annotated[
    BotRecommendationStatus | str, open_enum_validator(BotRecommendationStatus)
]
