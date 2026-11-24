from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResultBitbucketReportsApi(str, Enum):
    """The state of the report. May be set to PENDING and later updated."""

    PASSED = "PASSED"
    FAILED = "FAILED"
    SKIPPED = "SKIPPED"
    IGNORED = "IGNORED"

    __str__ = str.__str__


ResultBitbucketReportsApiOrStr: TypeAlias = Annotated[
    ResultBitbucketReportsApi | str, open_enum_validator(ResultBitbucketReportsApi)
]
