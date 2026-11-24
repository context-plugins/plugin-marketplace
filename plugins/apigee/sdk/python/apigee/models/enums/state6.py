from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State6(str, Enum):
    """Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not
    be enforced."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


State6OrStr: TypeAlias = Annotated[State6 | str, open_enum_validator(State6)]
