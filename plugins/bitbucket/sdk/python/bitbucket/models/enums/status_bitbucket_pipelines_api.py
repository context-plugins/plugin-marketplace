from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBitbucketPipelinesApi(str, Enum):
    """The current status of the runner."""

    UNREGISTERED = "UNREGISTERED"
    ONLINE = "ONLINE"
    OFFLINE = "OFFLINE"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"
    UNHEALTHY = "UNHEALTHY"

    __str__ = str.__str__


StatusBitbucketPipelinesApiOrStr: TypeAlias = Annotated[
    StatusBitbucketPipelinesApi | str, open_enum_validator(StatusBitbucketPipelinesApi)
]
