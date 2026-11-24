from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1PerigonNewsStoriesApi(str, Enum):
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


Status1PerigonNewsStoriesApiOrStr: TypeAlias = Annotated[
    Status1PerigonNewsStoriesApi | str, open_enum_validator(Status1PerigonNewsStoriesApi)
]
