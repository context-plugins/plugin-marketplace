from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Origin6(str, Enum):
    """suggested when you proposed moving this into a side task and the person agreed"""

    MANUAL = "manual"
    SUGGESTED = "suggested"

    __str__ = str.__str__


Origin6OrStr: TypeAlias = Annotated[Origin6 | str, open_enum_validator(Origin6)]
