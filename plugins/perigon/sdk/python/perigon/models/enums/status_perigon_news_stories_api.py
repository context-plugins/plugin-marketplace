from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusPerigonNewsStoriesApi(str, Enum):
    PENDING = "PENDING"
    COMPLETED = "COMPLETED"
    ERROR = "ERROR"

    __str__ = str.__str__


StatusPerigonNewsStoriesApiOrStr: TypeAlias = Annotated[
    StatusPerigonNewsStoriesApi | str, open_enum_validator(StatusPerigonNewsStoriesApi)
]
