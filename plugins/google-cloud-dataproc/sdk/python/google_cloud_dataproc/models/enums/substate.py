from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Substate(str, Enum):
    """Output only. Additional state information that includes status reported by the agent."""

    UNSPECIFIED = "UNSPECIFIED"
    UNHEALTHY = "UNHEALTHY"
    STALE_STATUS = "STALE_STATUS"

    __str__ = str.__str__


SubstateOrStr: TypeAlias = Annotated[Substate | str, open_enum_validator(Substate)]
