from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotAliasReplicationStatus(str, Enum):
    """The replication statuses for all the alias bot replications."""

    CREATING = "Creating"
    UPDATING = "Updating"
    AVAILABLE = "Available"
    DELETING = "Deleting"
    FAILED = "Failed"

    __str__ = str.__str__


BotAliasReplicationStatusOrStr: TypeAlias = Annotated[
    BotAliasReplicationStatus | str, open_enum_validator(BotAliasReplicationStatus)
]
