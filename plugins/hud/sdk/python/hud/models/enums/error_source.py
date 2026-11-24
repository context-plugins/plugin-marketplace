from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ErrorSource(str, Enum):
    """Who is at fault for a failure.

    ``user``: the customer's input, account, environment, or agent code. ``platform``: HUD infrastructure or a broken
    platform invariant. ``provider``: a third-party dependency (cloud runtime, upstream LLM API)."""

    USER = "user"
    PLATFORM = "platform"
    PROVIDER = "provider"

    __str__ = str.__str__


ErrorSourceOrStr: TypeAlias = Annotated[ErrorSource | str, open_enum_validator(ErrorSource)]
