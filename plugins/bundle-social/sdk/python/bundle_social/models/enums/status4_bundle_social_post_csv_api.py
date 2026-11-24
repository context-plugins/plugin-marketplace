from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status4BundleSocialPostCsvApi(str, Enum):
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

    __str__ = str.__str__


Status4BundleSocialPostCsvApiOrStr: TypeAlias = Annotated[
    Status4BundleSocialPostCsvApi | str, open_enum_validator(Status4BundleSocialPostCsvApi)
]
