from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotAliasStatus1(str, Enum):
    """The current status of the alias. The alias is first put into the Creating state. When the alias is ready to be
    used, it is put into the Available state. You can use the DescribeBotAlias operation to get the current state of an
    alias."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    DELETING = "Deleting"
    FAILED = "Failed"

    __str__ = str.__str__


BotAliasStatus1OrStr: TypeAlias = Annotated[BotAliasStatus1 | str, open_enum_validator(BotAliasStatus1)]
