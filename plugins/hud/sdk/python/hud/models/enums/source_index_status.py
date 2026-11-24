from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceIndexStatus(str, Enum):
    PENDING = "pending"
    INDEXING = "indexing"
    READY = "ready"
    FAILED = "failed"
    UNAVAILABLE = "unavailable"

    __str__ = str.__str__


SourceIndexStatusOrStr: TypeAlias = Annotated[SourceIndexStatus | str, open_enum_validator(SourceIndexStatus)]
