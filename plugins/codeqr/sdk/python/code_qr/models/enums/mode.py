from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode(str, Enum):
    """The mode to use for tracking the lead event. ``async`` will not block the request; ``wait`` will block the
    request until the lead event is fully recorded in CodeQR; ``deferred`` will defer the lead event creation to a
    subsequent request."""

    ASYNC = "async"
    WAIT = "wait"
    DEFERRED = "deferred"

    __str__ = str.__str__


ModeOrStr: TypeAlias = Annotated[Mode | str, open_enum_validator(Mode)]
