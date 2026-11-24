from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindBitbucketIssueTrackerApi(str, Enum):
    BUG = "bug"
    ENHANCEMENT = "enhancement"
    PROPOSAL = "proposal"
    TASK = "task"

    __str__ = str.__str__


KindBitbucketIssueTrackerApiOrStr: TypeAlias = Annotated[
    KindBitbucketIssueTrackerApi | str, open_enum_validator(KindBitbucketIssueTrackerApi)
]
