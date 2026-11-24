from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Result1BitbucketReportsApi(str, Enum):
    """The state of the report. May be set to PENDING and later updated."""

    PASSED = "PASSED"
    FAILED = "FAILED"
    PENDING = "PENDING"

    __str__ = str.__str__


Result1BitbucketReportsApiOrStr: TypeAlias = Annotated[
    Result1BitbucketReportsApi | str, open_enum_validator(Result1BitbucketReportsApi)
]
