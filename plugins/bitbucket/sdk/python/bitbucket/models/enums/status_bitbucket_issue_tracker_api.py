from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBitbucketIssueTrackerApi(str, Enum):
    """The status of the import/export job"""

    ACCEPTED = "ACCEPTED"
    STARTED = "STARTED"
    RUNNING = "RUNNING"
    FAILURE = "FAILURE"

    __str__ = str.__str__


StatusBitbucketIssueTrackerApiOrStr: TypeAlias = Annotated[
    StatusBitbucketIssueTrackerApi | str, open_enum_validator(StatusBitbucketIssueTrackerApi)
]
