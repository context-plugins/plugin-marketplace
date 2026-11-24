from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotStatus6(str, Enum):
    """The current status of the bot. When the status is Available the bot is ready to be used in conversations with
    users."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    INACTIVE = "Inactive"
    DELETING = "Deleting"
    FAILED = "Failed"
    VERSIONING = "Versioning"
    IMPORTING = "Importing"
    UPDATING = "Updating"

    __str__ = str.__str__


BotStatus6OrStr: TypeAlias = Annotated[BotStatus6 | str, open_enum_validator(BotStatus6)]
