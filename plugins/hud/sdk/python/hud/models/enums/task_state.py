from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TaskState(str, Enum):
    """Canonical task workflow state.

    Lives in the kernel so both the DB layer (orm.py pg enum) and the decision core (tasks.state) depend downward on
    it."""

    DRAFT = "draft"
    PENDING = "pending"
    READY = "ready"
    VERIFIED = "verified"
    REVISION = "revision"
    REJECTED = "rejected"

    __str__ = str.__str__


TaskStateOrStr: TypeAlias = Annotated[TaskState | str, open_enum_validator(TaskState)]
