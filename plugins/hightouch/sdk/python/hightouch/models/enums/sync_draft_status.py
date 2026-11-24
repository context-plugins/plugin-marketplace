from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SyncDraftStatus(str, Enum):
    """The state of a sync draft. New values may be added, so treat an unknown value as closed."""

    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    CANCELED = "canceled"

    __str__ = str.__str__


SyncDraftStatusOrStr: TypeAlias = Annotated[SyncDraftStatus | str, open_enum_validator(SyncDraftStatus)]
