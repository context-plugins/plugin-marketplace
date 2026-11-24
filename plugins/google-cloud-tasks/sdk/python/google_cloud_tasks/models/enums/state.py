from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """Output only. The state of the queue. ``state`` can only be changed by calling PauseQueue, ResumeQueue, or
    uploading `queue.yaml/xml <https://cloud.google.com/appengine/docs/python/config/queueref>`__. UpdateQueue cannot be
    used to change ``state``."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    DISABLED = "DISABLED"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
