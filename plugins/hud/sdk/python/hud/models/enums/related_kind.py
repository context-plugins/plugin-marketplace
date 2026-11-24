from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RelatedKind(str, Enum):
    JOB = "job"
    TASK = "task"
    RECENT = "recent"
    DISCOVER = "discover"

    __str__ = str.__str__


RelatedKindOrStr: TypeAlias = Annotated[RelatedKind | str, open_enum_validator(RelatedKind)]
