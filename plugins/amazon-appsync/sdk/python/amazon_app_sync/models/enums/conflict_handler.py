from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConflictHandler(str, Enum):
    """The Conflict Resolution strategy to perform in the event of a conflict. OPTIMISTIC_CONCURRENCY: Resolve conflicts
    by rejecting mutations when versions don't match the latest version at the server. AUTOMERGE: Resolve conflicts with
    the Automerge conflict resolution strategy. LAMBDA: Resolve conflicts with an Lambda function supplied in the
    LambdaConflictHandlerConfig."""

    OPTIMISTIC_CONCURRENCY = "OPTIMISTIC_CONCURRENCY"
    LAMBDA = "LAMBDA"
    AUTOMERGE = "AUTOMERGE"
    NONE = "NONE"

    __str__ = str.__str__


ConflictHandlerOrStr: TypeAlias = Annotated[ConflictHandler | str, open_enum_validator(ConflictHandler)]
