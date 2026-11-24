from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBundleSocialPostImportApi(str, Enum):
    PENDING = "PENDING"
    FETCHING_POSTS = "FETCHING_POSTS"
    FETCHING_ANALYTICS = "FETCHING_ANALYTICS"
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    RATE_LIMITED = "RATE_LIMITED"

    __str__ = str.__str__


StatusBundleSocialPostImportApiOrStr: TypeAlias = Annotated[
    StatusBundleSocialPostImportApi | str, open_enum_validator(StatusBundleSocialPostImportApi)
]
