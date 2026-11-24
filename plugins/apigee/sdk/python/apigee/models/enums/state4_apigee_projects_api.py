from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State4ApigeeProjectsApi(str, Enum):
    """Output only. The current state of the ApiHub instance."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    INACTIVE = "INACTIVE"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    FAILED = "FAILED"

    __str__ = str.__str__


State4ApigeeProjectsApiOrStr: TypeAlias = Annotated[
    State4ApigeeProjectsApi | str, open_enum_validator(State4ApigeeProjectsApi)
]
