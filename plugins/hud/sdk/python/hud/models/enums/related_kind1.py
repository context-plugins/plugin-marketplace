from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RelatedKind1(str, Enum):
    """``job`` (same job_id), ``task`` (every version of the same task), ``recent`` (caller's own traces, requires
    auth), or ``discover`` (most-recent visible traces overall)."""

    JOB = "job"
    TASK = "task"
    RECENT = "recent"
    DISCOVER = "discover"

    __str__ = str.__str__


RelatedKind1OrStr: TypeAlias = Annotated[RelatedKind1 | str, open_enum_validator(RelatedKind1)]
