from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAmazonDevOpsGuruInsightsApi(str, Enum):
    """The status of the proactive insight."""

    ONGOING = "ONGOING"
    CLOSED = "CLOSED"

    __str__ = str.__str__


StatusAmazonDevOpsGuruInsightsApiOrStr: TypeAlias = Annotated[
    StatusAmazonDevOpsGuruInsightsApi | str, open_enum_validator(StatusAmazonDevOpsGuruInsightsApi)
]
