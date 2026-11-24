from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State2BitbucketPullrequestsApi(str, Enum):
    RESOLVED = "RESOLVED"
    UNRESOLVED = "UNRESOLVED"

    __str__ = str.__str__


State2BitbucketPullrequestsApiOrStr: TypeAlias = Annotated[
    State2BitbucketPullrequestsApi | str, open_enum_validator(State2BitbucketPullrequestsApi)
]
