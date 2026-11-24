from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotAliasStatus2(str, Enum):
    """The current status of the alias. The status is Deleting while the alias is in the process of being deleted. Once
    the alias is deleted, it will no longer appear in the list of aliases returned by the ListBotAliases operation."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    DELETING = "Deleting"
    FAILED = "Failed"

    __str__ = str.__str__


BotAliasStatus2OrStr: TypeAlias = Annotated[BotAliasStatus2 | str, open_enum_validator(BotAliasStatus2)]
