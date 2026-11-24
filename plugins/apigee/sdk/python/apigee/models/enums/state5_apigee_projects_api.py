from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State5ApigeeProjectsApi(str, Enum):
    """Output only. State of the dependency."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROPOSED = "PROPOSED"
    VALIDATED = "VALIDATED"

    __str__ = str.__str__


State5ApigeeProjectsApiOrStr: TypeAlias = Annotated[
    State5ApigeeProjectsApi | str, open_enum_validator(State5ApigeeProjectsApi)
]
