from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotStatus7(str, Enum):
    """The current status of the bot. When the status is Available, the bot version is ready for use."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    INACTIVE = "Inactive"
    DELETING = "Deleting"
    FAILED = "Failed"
    VERSIONING = "Versioning"
    IMPORTING = "Importing"
    UPDATING = "Updating"

    __str__ = str.__str__


BotStatus7OrStr: TypeAlias = Annotated[BotStatus7 | str, open_enum_validator(BotStatus7)]
