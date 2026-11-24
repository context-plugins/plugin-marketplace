from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotAliasStatus3(str, Enum):
    """The current status of the alias. When the alias is Available, the alias is ready for use with your bot."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    DELETING = "Deleting"
    FAILED = "Failed"

    __str__ = str.__str__


BotAliasStatus3OrStr: TypeAlias = Annotated[BotAliasStatus3 | str, open_enum_validator(BotAliasStatus3)]
