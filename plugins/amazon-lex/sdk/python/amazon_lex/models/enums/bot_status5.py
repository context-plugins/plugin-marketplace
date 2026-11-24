from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotStatus5(str, Enum):
    """The current status of the bot."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    INACTIVE = "Inactive"
    DELETING = "Deleting"
    FAILED = "Failed"
    VERSIONING = "Versioning"
    IMPORTING = "Importing"
    UPDATING = "Updating"

    __str__ = str.__str__


BotStatus5OrStr: TypeAlias = Annotated[BotStatus5 | str, open_enum_validator(BotStatus5)]
