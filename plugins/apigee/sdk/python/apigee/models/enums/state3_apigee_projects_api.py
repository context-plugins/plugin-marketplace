from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State3ApigeeProjectsApi(str, Enum):
    """Output only. Represents the state of the plugin. Note this field will not be set for plugins developed via plugin
    framework as the state will be managed at plugin instance level."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


State3ApigeeProjectsApiOrStr: TypeAlias = Annotated[
    State3ApigeeProjectsApi | str, open_enum_validator(State3ApigeeProjectsApi)
]
