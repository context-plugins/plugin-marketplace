from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State3(str, Enum):
    """Output only. The state of the Analytics add-on."""

    ADDON_STATE_UNSPECIFIED = "ADDON_STATE_UNSPECIFIED"
    ENABLING = "ENABLING"
    ENABLED = "ENABLED"
    DISABLING = "DISABLING"
    DISABLED = "DISABLED"

    __str__ = str.__str__


State3OrStr: TypeAlias = Annotated[State3 | str, open_enum_validator(State3)]
