from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State1BitbucketPullrequestsApi(str, Enum):
    """The pull request's current status."""

    OPEN = "OPEN"
    DRAFT = "DRAFT"
    QUEUED = "QUEUED"
    MERGED = "MERGED"
    DECLINED = "DECLINED"
    SUPERSEDED = "SUPERSEDED"

    __str__ = str.__str__


State1BitbucketPullrequestsApiOrStr: TypeAlias = Annotated[
    State1BitbucketPullrequestsApi | str, open_enum_validator(State1BitbucketPullrequestsApi)
]
