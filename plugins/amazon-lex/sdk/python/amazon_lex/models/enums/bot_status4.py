from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotStatus4(str, Enum):
    """The current status of the bot. The status is Deleting while the bot and its associated resources are being
    deleted."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    INACTIVE = "Inactive"
    DELETING = "Deleting"
    FAILED = "Failed"
    VERSIONING = "Versioning"
    IMPORTING = "Importing"
    UPDATING = "Updating"

    __str__ = str.__str__


BotStatus4OrStr: TypeAlias = Annotated[BotStatus4 | str, open_enum_validator(BotStatus4)]
