from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State2ApigeeProjectsApi(str, Enum):
    """Output only. The state of the addon."""

    ADDON_STATE_UNSPECIFIED = "ADDON_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    ERROR = "ERROR"
    INACTIVE = "INACTIVE"

    __str__ = str.__str__


State2ApigeeProjectsApiOrStr: TypeAlias = Annotated[
    State2ApigeeProjectsApi | str, open_enum_validator(State2ApigeeProjectsApi)
]
