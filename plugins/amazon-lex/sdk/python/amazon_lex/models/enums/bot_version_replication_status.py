from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotVersionReplicationStatus(str, Enum):
    """The version replication status for all the replicated bots."""

    CREATING = "Creating"
    AVAILABLE = "Available"
    DELETING = "Deleting"
    FAILED = "Failed"

    __str__ = str.__str__


BotVersionReplicationStatusOrStr: TypeAlias = Annotated[
    BotVersionReplicationStatus | str, open_enum_validator(BotVersionReplicationStatus)
]
