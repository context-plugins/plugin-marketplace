from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotStatus3(str, Enum):
    """When you send a request to create or update a bot, Amazon Lex sets the status response element to Creating. After
    Amazon Lex builds the bot, it sets status to Available. If Amazon Lex can't build the bot, it sets status to
    Failed."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    INACTIVE = "Inactive"
    DELETING = "Deleting"
    FAILED = "Failed"
    VERSIONING = "Versioning"
    IMPORTING = "Importing"
    UPDATING = "Updating"

    __str__ = str.__str__


BotStatus3OrStr: TypeAlias = Annotated[BotStatus3 | str, open_enum_validator(BotStatus3)]
