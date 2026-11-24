from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State6ApigeeProjectsApi(str, Enum):
    """Output only. The current state of the plugin action in the plugin instance."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    ENABLING = "ENABLING"
    DISABLING = "DISABLING"
    ERROR = "ERROR"

    __str__ = str.__str__


State6ApigeeProjectsApiOrStr: TypeAlias = Annotated[
    State6ApigeeProjectsApi | str, open_enum_validator(State6ApigeeProjectsApi)
]
