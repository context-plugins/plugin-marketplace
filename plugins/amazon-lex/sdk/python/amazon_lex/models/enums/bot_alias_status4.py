from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotAliasStatus4(str, Enum):
    """The current status of the bot alias. When the status is Available the alias is ready for use."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    DELETING = "Deleting"
    FAILED = "Failed"

    __str__ = str.__str__


BotAliasStatus4OrStr: TypeAlias = Annotated[BotAliasStatus4 | str, open_enum_validator(BotAliasStatus4)]
