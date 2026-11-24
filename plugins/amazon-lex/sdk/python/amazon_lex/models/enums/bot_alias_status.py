from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotAliasStatus(str, Enum):
    """The current state of the bot alias. If the status is Available, the alias is ready for use."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    DELETING = "Deleting"
    FAILED = "Failed"

    __str__ = str.__str__


BotAliasStatusOrStr: TypeAlias = Annotated[BotAliasStatus | str, open_enum_validator(BotAliasStatus)]
