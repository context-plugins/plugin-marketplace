from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State1ApigeeProjectsApi(str, Enum):
    """Output only. The current lifecycle state."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SPEC_API_REGISTERED = "SPEC_API_REGISTERED"
    SPEC_GENERATED = "SPEC_GENERATED"
    SPEC_ASSOCIATED = "SPEC_ASSOCIATED"

    __str__ = str.__str__


State1ApigeeProjectsApiOrStr: TypeAlias = Annotated[
    State1ApigeeProjectsApi | str, open_enum_validator(State1ApigeeProjectsApi)
]
