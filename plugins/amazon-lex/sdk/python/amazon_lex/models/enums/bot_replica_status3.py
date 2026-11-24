from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotReplicaStatus3(str, Enum):
    """The operational status of the replicated bot being monitored."""

    ENABLING = "Enabling"
    ENABLED = "Enabled"
    DELETING = "Deleting"
    FAILED = "Failed"

    __str__ = str.__str__


BotReplicaStatus3OrStr: TypeAlias = Annotated[BotReplicaStatus3 | str, open_enum_validator(BotReplicaStatus3)]
