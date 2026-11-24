from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State7ApigeeProjectsApi(str, Enum):
    """Output only. The current state of the plugin instance (e.g., enabled, disabled, provisioning)."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    APPLYING_CONFIG = "APPLYING_CONFIG"
    ERROR = "ERROR"
    FAILED = "FAILED"
    DELETING = "DELETING"

    __str__ = str.__str__


State7ApigeeProjectsApiOrStr: TypeAlias = Annotated[
    State7ApigeeProjectsApi | str, open_enum_validator(State7ApigeeProjectsApi)
]
