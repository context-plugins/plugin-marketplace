from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FilterCircleCiRestApiV1BuildApi(str, Enum):
    COMPLETED = "completed"
    SUCCESSFUL = "successful"
    FAILED = "failed"
    RUNNING = "running"

    __str__ = str.__str__


FilterCircleCiRestApiV1BuildApiOrStr: TypeAlias = Annotated[
    FilterCircleCiRestApiV1BuildApi | str, open_enum_validator(FilterCircleCiRestApiV1BuildApi)
]
