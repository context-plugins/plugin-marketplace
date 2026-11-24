from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BotReplicaStatus(str, Enum):
    """The operation status for the replicated bot applicable."""

    ENABLING = "Enabling"
    ENABLED = "Enabled"
    DELETING = "Deleting"
    FAILED = "Failed"

    __str__ = str.__str__


BotReplicaStatusOrStr: TypeAlias = Annotated[BotReplicaStatus | str, open_enum_validator(BotReplicaStatus)]
