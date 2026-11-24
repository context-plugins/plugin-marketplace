from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Substate1(str, Enum):
    """Output only. Additional state information, which includes status reported by the agent."""

    UNSPECIFIED = "UNSPECIFIED"
    SUBMITTED = "SUBMITTED"
    QUEUED = "QUEUED"
    STALE_STATUS = "STALE_STATUS"

    __str__ = str.__str__


Substate1OrStr: TypeAlias = Annotated[Substate1 | str, open_enum_validator(Substate1)]
