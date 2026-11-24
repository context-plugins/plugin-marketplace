from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1AmazonDevOpsGuruInsightsApi(str, Enum):
    """The status of a reactive insight."""

    ONGOING = "ONGOING"
    CLOSED = "CLOSED"

    __str__ = str.__str__


Status1AmazonDevOpsGuruInsightsApiOrStr: TypeAlias = Annotated[
    Status1AmazonDevOpsGuruInsightsApi | str, open_enum_validator(Status1AmazonDevOpsGuruInsightsApi)
]
