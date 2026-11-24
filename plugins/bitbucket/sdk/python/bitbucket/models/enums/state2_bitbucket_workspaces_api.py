from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State2BitbucketWorkspacesApi(str, Enum):
    OPEN = "OPEN"
    MERGED = "MERGED"
    DECLINED = "DECLINED"
    SUPERSEDED = "SUPERSEDED"

    __str__ = str.__str__


State2BitbucketWorkspacesApiOrStr: TypeAlias = Annotated[
    State2BitbucketWorkspacesApi | str, open_enum_validator(State2BitbucketWorkspacesApi)
]
