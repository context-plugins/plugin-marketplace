from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotStatus1(str, Enum):
    """The status of the bot. When the status is available, the version of the bot is ready for use."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    INACTIVE = "Inactive"
    DELETING = "Deleting"
    FAILED = "Failed"
    VERSIONING = "Versioning"
    IMPORTING = "Importing"
    UPDATING = "Updating"

    __str__ = str.__str__


BotStatus1OrStr: TypeAlias = Annotated[BotStatus1 | str, open_enum_validator(BotStatus1)]
