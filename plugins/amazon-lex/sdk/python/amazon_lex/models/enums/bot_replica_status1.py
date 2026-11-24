from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotReplicaStatus1(str, Enum):
    """The operational status of the replicated bot generated."""

    ENABLING = "Enabling"
    ENABLED = "Enabled"
    DELETING = "Deleting"
    FAILED = "Failed"

    __str__ = str.__str__


BotReplicaStatus1OrStr: TypeAlias = Annotated[BotReplicaStatus1 | str, open_enum_validator(BotReplicaStatus1)]
