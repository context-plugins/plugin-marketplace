from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Lifecycle(str, Enum):
    """The build lifecycle phase"""

    QUEUED = "queued"
    SCHEDULED = "scheduled"
    NOT_RUN = "not_run"
    NOT_RUNNING = "not_running"
    RUNNING = "running"
    FINISHED = "finished"

    __str__ = str.__str__


LifecycleOrStr: TypeAlias = Annotated[Lifecycle | str, open_enum_validator(Lifecycle)]
