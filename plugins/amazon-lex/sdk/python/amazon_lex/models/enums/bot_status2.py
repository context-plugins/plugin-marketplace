from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotStatus2(str, Enum):
    """Shows the current status of the bot. The bot is first in the Creating status. Once the bot is read for use, it
    changes to the Available status. After the bot is created, you can use the DRAFT version of the bot."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    INACTIVE = "Inactive"
    DELETING = "Deleting"
    FAILED = "Failed"
    VERSIONING = "Versioning"
    IMPORTING = "Importing"
    UPDATING = "Updating"

    __str__ = str.__str__


BotStatus2OrStr: TypeAlias = Annotated[BotStatus2 | str, open_enum_validator(BotStatus2)]
